import "./_text-input.scss";
import type { TextInputProps } from "./TextInput.types";
/**
 * Input component for single-line text input
 *
 * @param {string} value - The value of the input
 * @param {function} onChange - Callback function when value changes
 * @param {string} placeholder - Placeholder text
 * @param {string} type - Input type: 'text', 'email', 'password', etc. (default: 'text')
 * @param {string} size - Size variant: 'compact' or 'default' (default: 'default')
 * @param {string} state - State variant: 'default', 'focused', 'error', or 'disabled'
 * @param {boolean} disabled - Whether the input is disabled (overrides state)
 * @param {string} icon - Phosphor icon name (e.g., "MagnifyingGlass", "Eye")
 * @param {string} iconPosition - Position of the icon: 'left' or 'right' (default: 'right')
 * @param {function} onIconClick - Callback when the icon is clicked
 * @param {string} id - Unique identifier for the input
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the input element
 */
export default function Input({ value, onChange, placeholder, type, size, state, disabled, icon, iconPosition, onIconClick, id, label, helperText, errorText, endAdornment, className, "aria-describedby": ariaDescribedBy, ...props }: TextInputProps): import("react/jsx-runtime").JSX.Element;
