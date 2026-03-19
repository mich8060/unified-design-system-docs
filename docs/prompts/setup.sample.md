Set up this project end-to-end, including machine bootstrap, so it works even on a fresh designer machine.

Execution rules:
- Execute in order. Do not skip or reorder.
- If a dependency is missing, install it automatically.
- Keep edits minimal and deterministic.
- Report every command run and pass/fail status.

1. Bootstrap environment (required)
- Detect OS.
- Check for these tools and install if missing:
  - `git`
  - `node` (LTS)
  - `npm`
- Verify versions after install:
  - `node -v`
  - `npm -v`
  - `git --version`

2. Project dependencies
- Run `npm install`.
- If install fails, fix lockfile/dependency issues and rerun until successful.

3. Provider/tooling step (runtime-aware)
- Detect active runtime capabilities.
- If slash commands are supported in this runtime, run:
  - `/plugin marketplace add anthropics/claude-code`
  - `/plugin install frontend-design@claude-code-plugins`
  - Verify install via command output before continuing.
- If slash commands are not supported, skip plugin install and continue normally.
- Do not fail setup due to unavailable plugin command surface.
- Do not claim plugin install success unless output confirms it.

4. Brand selection gate (required before app file edits)
- Ask: "Which brand are you building for: Default, CompHealth, Weatherby, Connect, Locumsmart, Modio, GMS, or Wireframe?"
- Wait for explicit answer.
- Normalize to:
  - `default | comphealth | weatherby | connect | locumsmart | modio | gms | wireframe`
- Do not create or modify `src/main.*`, `src/App.*`, routes, or menu config until brand is selected.

5. UDS contract load order (required)
- `@chg-ds/unified-design-system/ai/discovery.json`
- `@chg-ds/unified-design-system/ai/manifest.json`
- `@chg-ds/unified-design-system/ai/schema`
- `@chg-ds/unified-design-system/ai/icons` (or `@chg-ds/unified-design-system/ai/icons.json`)
- `@chg-ds/unified-design-system/ai/navigation`
- `@chg-ds/unified-design-system/ai/templates`

6. Typography setup (required)
- Ensure font family is `Inter`.
- Add Google Fonts preload + stylesheet in `index.html`:
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com` (with `crossorigin`)
  - `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`
- Apply `font-family: 'Inter', sans-serif;` at app root/body (or through UDS typography token mapping).

7. App scaffold requirements
- Ensure app root is wrapped in `BrowserRouter` from `react-router-dom`.
- Root layout must be:
  - `AppShell`
  - `AppShell.Menu`
  - `AppShell.Content`
  - `AppShell.Main`

8. Brand navigation + placeholder pages
- Load nav from:
  - `@chg-ds/unified-design-system/ai/navigation`
  - `@chg-ds/unified-design-system/ai/navigation/brand-menus.json`
- Use selected brand for:
  - `AppShell` `brand`
  - `Menu.activeBrand` and `Menu.brands`
  - `Menu.navItems` from selected brand entry
- Always set `Menu.showSearch={false}` unless explicitly requested otherwise.
- Create one route + one placeholder page per top-level nav item.
- If nav items include children, create routes/pages for each child item.
- Each placeholder page must include:
  - `Toolbar` with page title
  - `Container` (`appearance="transparent"`, `padding="large"`)
  - `Card` with short "coming soon" content
- Wire routes into `AppShell.Main`.
- Do not invent pages outside the selected brand nav contract.

9. UI implementation constraints
- Use only package exports from `@chg-ds/unified-design-system`.
- No Tailwind.
- No deep imports.
- No custom CSS variables; use `--uds-*` or literals.
- Load icon options from `@chg-ds/unified-design-system/ai/icons` (or `.../ai/icons.json`) before assigning icon props.
- If an icon is not in the catalog, use a catalog-listed fallback or omit icon.

10. Validation
- Run:
  - `npm run build`
  - `npm run ci:ai` (if available)
- Fix failures and rerun until green.

11. Final report
- List changed files.
- List exact commands run with pass/fail.
- List remaining risks/TODOs.
