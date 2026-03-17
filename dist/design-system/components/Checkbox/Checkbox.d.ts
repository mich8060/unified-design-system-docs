import "./_checkbox.scss";
import type { CheckboxProps } from "./Checkbox.types";
/**
 * Checkbox component for form inputs
 * @param {boolean} checked - Whether the checkbox is checked
 * @param {function} onChange - Callback function when checkbox state changes
 * @param {string} id - Unique identifier for the checkbox input
 * @param {string} label - Label text for the checkbox
 * @param {boolean} disabled - Whether the checkbox is disabled
 * @param {boolean} indeterminate - Whether the checkbox is in indeterminate state
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the checkbox
 */
export default function Checkbox({ checked, onChange, id, label, disabled, indeterminate, className, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
