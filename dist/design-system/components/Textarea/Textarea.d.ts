import "./_textarea.scss";
import type { TextareaProps } from "./Textarea.types";
/**
 * Textarea component for multi-line text input
 *
 * @param {string} value - The value of the textarea
 * @param {function} onChange - Callback function when value changes
 * @param {string} placeholder - Placeholder text
 * @param {string} size - Size variant: 'compact' (80px min-height) or 'default' (120px min-height)
 * @param {string} state - State variant: 'default', 'focused', 'error', or 'disabled'
 * @param {boolean} resize - Whether the textarea can be resized (default: true)
 * @param {boolean} disabled - Whether the textarea is disabled (overrides state)
 * @param {string} id - Unique identifier for the textarea
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the textarea element
 */
export default function Textarea({ value, onChange, placeholder, size, state, resize, disabled, id, className, ...props }: TextareaProps): import("react/jsx-runtime").JSX.Element;
