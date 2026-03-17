import "./_progress-indicator.scss";
import type { ProgressIndicatorProps } from "./ProgressIndicator.types";
/**
 * ProgressIndicator component for displaying progress bars
 * @param {number} value - Progress value (0-100)
 * @param {number} max - Maximum value (default: 100)
 * @param {string} variant - Color variant: 'default', 'blue', 'green', 'success', 'orange', 'warning', 'red', 'error', 'purple'
 * @param {string} size - Size variant: 'small', 'medium', or 'large'
 * @param {string} label - Optional label text to display above the progress bar
 * @param {boolean} showValue - Whether to show the percentage value
 * @param {string} labelPosition - Where to place the percentage label
 * @param {boolean} showLabel - Whether to show the label (if provided)
 * @param {string} className - Additional CSS classes
 * @param {string} 'aria-label' - Accessible label for screen readers
 * @param {object} props - Additional props to pass to the progress element
 */
export default function ProgressIndicator({ value, max, variant, size, label, showValue, labelPosition, showLabel, className, "aria-label": ariaLabel, ...props }: ProgressIndicatorProps): import("react/jsx-runtime").JSX.Element;
