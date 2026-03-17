const renderCssVars = (vars) => Object.entries(vars)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join("\n");
const renderRootBlock = (vars) => `:root {\n${renderCssVars(vars)}\n}`;
export const generateRuntimeTokensCss = (tokens) => {
    const sections = [];
    sections.push(renderRootBlock(tokens.color.cssVars));
    sections.push(renderRootBlock(tokens.spacing.cssVars));
    sections.push(renderRootBlock(tokens.radius.cssVars));
    sections.push(renderRootBlock(tokens.typography.cssVars));
    sections.push(renderRootBlock(tokens.shadow.cssVars));
    sections.push(renderRootBlock(tokens.motion.cssVars));
    if (tokens.typography.media) {
        for (const media of tokens.typography.media) {
            sections.push(`@media ${media.query} {\n${renderRootBlock(media.cssVars)}\n}`);
        }
    }
    if (tokens.shadow.darkCssVars) {
        sections.push(`.theme-dark {\n${renderCssVars(tokens.shadow.darkCssVars)}\n}`);
    }
    if (tokens.color.darkCssVars) {
        sections.push(`.theme-dark {\n${renderCssVars(tokens.color.darkCssVars)}\n}`);
    }
    if (tokens.motion.darkCssVars) {
        sections.push(`.theme-dark {\n${renderCssVars(tokens.motion.darkCssVars)}\n}`);
    }
    if (tokens.spacing.darkCssVars) {
        sections.push(`.theme-dark {\n${renderCssVars(tokens.spacing.darkCssVars)}\n}`);
    }
    if (tokens.radius.darkCssVars) {
        sections.push(`.theme-dark {\n${renderCssVars(tokens.radius.darkCssVars)}\n}`);
    }
    return `${sections.join("\n\n")}\n`;
};
