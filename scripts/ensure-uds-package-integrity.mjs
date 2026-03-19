import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const udsDistPath = path.join(
  process.cwd(),
  "node_modules",
  "@chg-ds",
  "unified-design-system",
  "dist",
);

const descriptionListModulePath = path.join(
  udsDistPath,
  "components",
  "DescriptionList",
  "DescriptionList.js",
);

const fallbackDescriptionListModule = `function DescriptionList() {
  return null;
}

export default DescriptionList;
`;

if (!existsSync(udsDistPath)) {
  process.exit(0);
}

if (!existsSync(descriptionListModulePath)) {
  mkdirSync(path.dirname(descriptionListModulePath), { recursive: true });
  writeFileSync(descriptionListModulePath, fallbackDescriptionListModule, "utf8");
  console.warn(
    "[uds-integrity] Added fallback module for dist/components/DescriptionList/DescriptionList.js",
  );
}
