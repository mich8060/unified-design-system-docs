import "./_radio.scss";
import type { RadioProps } from "./Radio.types";
/**
 * Radio component for form inputs
 * @param {boolean} checked - Whether the radio button is checked
 * @param {function} onChange - Callback function when radio button state changes
 * @param {string} name - Name attribute for grouping radio buttons (required for proper functionality)
 * @param {string} id - Unique identifier for the radio input
 * @param {string} value - Value of the radio button
 * @param {string} label - Label text for the radio button
 * @param {boolean} disabled - Whether the radio button is disabled
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the radio input
 */
export default function Radio({ checked, onChange, name, id, value, label, disabled, className, ...props }: RadioProps): import("react/jsx-runtime").JSX.Element;
