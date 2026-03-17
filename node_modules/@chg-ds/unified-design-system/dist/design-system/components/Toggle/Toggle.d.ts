import "./_toggle.scss";
import type { ToggleProps } from "./Toggle.types";
/**
 * Toggle component for switching between states
 * @param {boolean} checked - Whether the toggle is checked (on/off)
 * @param {string} state - Toggle state: 'off', 'on', or 'indeterminate' (default: 'off')
 * @param {string} size - Toggle size: 'large' or 'small' (default: 'large')
 * @param {function} onChange - Callback function when toggle state changes
 * @param {boolean} disabled - Whether the toggle is disabled
 * @param {string} id - Unique identifier for the toggle input
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the toggle
 */
export default function Toggle({ checked, state, size, onChange, disabled, id, className, ...props }: ToggleProps): import("react/jsx-runtime").JSX.Element;
