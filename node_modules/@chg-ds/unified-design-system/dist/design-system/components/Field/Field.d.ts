import "./_field.scss";
import type { FieldProps } from "./Field.types";
/**
 * Field component for form input fields with label, helper text, and optional features
 * @param {string} label - Label text for the field
 * @param {boolean} required - Whether the field is required (adds asterisk to label)
 * @param {string} helperMessage - Helper text displayed below the input
 * @param {string} infoIcon - Icon name for info icon (e.g., "Info")
 * @param {function} onInfoClick - Callback when info icon is clicked
 * @param {number} maxLength - Maximum character length (enables character count)
 * @param {number|string} value - Current value (for character count calculation)
 * @param {string} id - Unique identifier for the field
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - The input element to wrap
 * @param {object} props - Additional props to pass to the field wrapper
 */
export default function Field({ label, state, required, helperMessage, maxLength, value, infoIcon, onInfoClick, id, className, children, ...props }: FieldProps): import("react/jsx-runtime").JSX.Element;
