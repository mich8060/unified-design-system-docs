import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const udsDistPath = path.join(
  process.cwd(),
  "node_modules",
  "@chg-ds",
  "unified-design-system",
  "dist",
);

if (!existsSync(udsDistPath)) {
  process.exit(0);
}

const udsIndexPath = path.join(udsDistPath, "index.js");
if (!existsSync(udsIndexPath)) {
  process.exit(0);
}

const indexSource = readFileSync(udsIndexPath, "utf8");
const relativeImportRegex = /from\s*"(\.\/[^"]+\.js)"/g;
const referencedJsModules = new Set();

for (const match of indexSource.matchAll(relativeImportRegex)) {
  referencedJsModules.add(match[1]);
}

let patchedCount = 0;

for (const modulePath of referencedJsModules) {
  const absoluteJsPath = path.join(udsDistPath, modulePath.slice(2));
  if (existsSync(absoluteJsPath)) {
    continue;
  }

  const absoluteCjsPath = absoluteJsPath.replace(/\.js$/, ".cjs");
  const exportName = path.basename(absoluteJsPath, ".js");
  const cjsRelativePath = `./${path.basename(absoluteCjsPath)}`;

  const proxyModuleSource = existsSync(absoluteCjsPath)
    ? `import * as __udsCjsModule from "${cjsRelativePath}";
const __udsResolved = __udsCjsModule.default ?? __udsCjsModule;

export const ${exportName} = __udsCjsModule.${exportName} ?? __udsResolved;
export default __udsResolved;
export * from "${cjsRelativePath}";
`
    : `function ${exportName}() {
  return null;
}

export { ${exportName} };
export default ${exportName};
`;

  mkdirSync(path.dirname(absoluteJsPath), { recursive: true });
  writeFileSync(absoluteJsPath, proxyModuleSource, "utf8");
  patchedCount += 1;
  console.warn(`[uds-integrity] Added fallback module for ${modulePath}`);
}

if (patchedCount === 0) {
  console.log("[uds-integrity] Package module integrity verified.");
}
