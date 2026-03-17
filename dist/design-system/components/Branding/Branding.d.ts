import "./_branding.scss";
import type { BrandingProps } from "./Branding.types";
/**
 * Branding component — displays a single brand logo as inline SVG.
 * Colors are driven by CSS custom properties (--uds-brands-*) so they
 * can be themed for light / dark mode.
 *
 * Works like <Icon name="House" /> but for brand logos:
 *   <Branding brand="connect" />
 *
 * @param {string}  brand   - Brand key: "design-system" | "connect" | "comphealth" |
 *                            "weatherby" | "modio" | "locumsmart" | "chg" | "wireframe"
 * @param {boolean} symbol  - When true, renders only the brand symbol/icon instead
 *                            of the full logo. Defaults to false (full logo).
 * @param {boolean} inherit - When true, ignores `brand` prop and automatically uses
 *                            the active brand from the `data-brand` attribute on <html>.
 * @param {string}  size    - Size variant: "small" | "default" | "large"
 * @param {string}  className - Additional CSS classes
 */
export default function Branding({ brand, symbol, inherit, size, className, ...props }: BrandingProps): import("react/jsx-runtime").JSX.Element | null;
