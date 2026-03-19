import { Button, Code, Divider, Layout, Text } from "@chg-ds/unified-design-system";
import { useNavigate } from "react-router-dom";
import { DocPageLayout } from "./DocPageLayout";
import bootstrapPrompt from "../../../docs/prompts/setup.sample.md?raw";

const PACKAGE_NAME = "@chg-ds/unified-design-system";

const INSTALL_COMMANDS = `npm install ${PACKAGE_NAME}
pnpm add ${PACKAGE_NAME}
yarn add ${PACKAGE_NAME}
bun add ${PACKAGE_NAME}`;

const STYLE_IMPORTS = `import "${PACKAGE_NAME}/styles.css";
import "${PACKAGE_NAME}/tokens.css"; // optional: only when building custom components`;

const FONT_SETUP = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />`;

const FONT_NOTE = `UDS typography uses an Inter-first font stack via tokens. If Inter is not loaded, your app will fall back to system fonts.`;

const USAGE_EXAMPLE = `import { AppShell, Button, Menu } from "${PACKAGE_NAME}";
import "${PACKAGE_NAME}/styles.css";

export function App() {
  return (
    <AppShell brand="default" theme="light">
      <AppShell.Menu>
        <Menu />
      </AppShell.Menu>
      <AppShell.Content>
        <AppShell.Main>
          <Button label="Get started" />
        </AppShell.Main>
      </AppShell.Content>
    </AppShell>
  );
}`;

const PREREQUISITES = [
  "Node.js 18+ (LTS recommended)",
  "React 18+ application",
  "A package manager (npm, pnpm, Yarn, or Bun)",
  "TypeScript 5+ recommended for best typing support",
];

const WHAT_YOU_GET = [
  "Prebuilt UDS components and application shell primitives",
  "Theme and brand-aware design tokens",
  "Composable APIs for forms, navigation, feedback, and layout",
];

export function InstallationPage() {
  const navigate = useNavigate();

  return (
    <DocPageLayout
      title="Installation"
      description="Set up the Unified Design System package, required tech stack, and first-use imports."
    >
      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Prerequisites
        </Text>
        <Layout as="ul" direction="column" gap="8">
          {PREREQUISITES.map((item) => (
            <Text as="li" key={item} variant="body-16" leading="regular">
              {item}
            </Text>
          ))}
        </Layout>
      </Layout>

      <Divider variant="solid" />

      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Install the Package
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          Use your preferred package manager to add <code>{PACKAGE_NAME}</code>:
        </Text>
        <Code language="bash" code={INSTALL_COMMANDS} />
      </Layout>

      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Import Styles and Tokens
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          Import base styles once at your app entry point. Token styles are optional but useful when you build
          custom UI that should stay aligned with UDS variables.
        </Text>
        <Code language="tsx" code={STYLE_IMPORTS} />
      </Layout>

      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Typography (Inter)
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          {FONT_NOTE}
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          Add this in your app shell HTML (for example in <code>index.html</code>):
        </Text>
        <Code language="html" code={FONT_SETUP} />
      </Layout>

      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          First Render
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          Start by composing your app with AppShell regions so navigation and page content follow the standard
          layout contract out of the box.
        </Text>
        <Code language="tsx" code={USAGE_EXAMPLE} />
      </Layout>

      <Divider variant="solid" />

      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Sample Bootstrap Prompt
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          Use this prompt to initialize a fresh app against the UDS package contract:
        </Text>
        <Code language="markdown" code={bootstrapPrompt} />
      </Layout>

      <Divider variant="solid" />

      <Layout direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          What You Get
        </Text>
        <Layout as="ul" direction="column" gap="8">
          {WHAT_YOU_GET.map((item) => (
            <Text as="li" key={item} variant="body-16" leading="regular">
              {item}
            </Text>
          ))}
        </Layout>
      </Layout>

      <Layout alignItems="center" gap="12" wrap>
        <Button label="Back to Overview" appearance="outline" onClick={() => navigate("/getting-started")} />
        <Button
          label="Browse Components"
          icon="ArrowRight"
          layout="icon-right"
          onClick={() => navigate("/docs/components-overview")}
        />
      </Layout>
    </DocPageLayout>
  );
}
