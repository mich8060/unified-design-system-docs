import "./_progress-circle.scss";
import type { ProgressCircleProps } from "./ProgressCircle.types";
/**
 * ProgressCircle component for displaying circular progress indicators
 * @param {number} value - Progress value (0-100)
 * @param {number} max - Maximum value (default: 100)
 * @param {string} size - Size variant: 'xxs', 'xs', 'sm', 'md', or 'lg'
 * @param {string} shape - Shape variant: 'circle' or 'half-circle'
 * @param {string} label - Optional label text to display
 * @param {string} valueLabel - Optional custom center value text
 * @param {boolean} showLabel - Whether to show the label (if provided)
 * @param {string} className - Additional CSS classes
 * @param {string} 'aria-label' - Accessible label for screen readers
 * @param {object} props - Additional props to pass to the progress element
 */
export default function ProgressCircle({ value, max, size, shape, label, valueLabel, showLabel, className, "aria-label": ariaLabel, ...props }: ProgressCircleProps): import("react/jsx-runtime").JSX.Element;
