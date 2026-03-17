import "./_dot-status.scss";
import type { DotStatusProps } from "./DotStatus.types";
/**
 * Dot Status component for displaying status indicators
 * @param {string} variant - Color variant
 * @param {string} size - Size variant: 'small', 'medium', or 'large'
 * @param {boolean} outline - Whether to show an outline/border around the dot
 * @param {string} className - Additional CSS classes
 * @param {string} 'aria-label' - Accessible label for screen readers
 * @param {object} props - Additional props to pass to the dot element
 */
export default function DotStatus({ variant, size, outline, className, "aria-label": ariaLabel, ...props }: DotStatusProps): import("react/jsx-runtime").JSX.Element;
