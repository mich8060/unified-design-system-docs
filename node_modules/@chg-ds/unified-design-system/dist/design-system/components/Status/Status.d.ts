import "./_status.scss";
import type { StatusProps } from "./Status.types";
/**
 * Status component for displaying status indicators with labels
 * @param {string} label - The text content of the status
 * @param {string} variant - Color variant for the status dot
 * @param {string} appearance - Background appearance: 'light-gray' or 'white'
 * @param {string} shape - Shape variant: 'pill' (fully rounded) or 'rounded' (slightly rounded)
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler function
 * @param {boolean} disabled - Whether the status is disabled
 * @param {object} props - Additional props to pass to the status element
 */
export default function Status({ label, variant, appearance, shape, className, onClick, disabled, ...props }: StatusProps): import("react/jsx-runtime").JSX.Element;
