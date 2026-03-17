import "./_steps.scss";
import type { StepsProps } from "./Steps.types";
/**
 * Steps component for displaying multi-step processes
 * @param {array} steps - Array of step objects. Each step should have: { label, optionalLabel, status }
 * @param {string} orientation - Orientation: 'horizontal' or 'vertical'
 * @param {string} size - Size variant: 'default' or 'compact'
 * @param {boolean} displayLabel - Whether to display labels
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the steps container
 */
export default function Steps({ steps, orientation, size, displayLabel, className, ...props }: StepsProps): import("react/jsx-runtime").JSX.Element | null;
