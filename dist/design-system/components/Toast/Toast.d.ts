import "./_toast.scss";
import type { ToastProps } from "./Toast.types";
/**
 * Toast component for displaying notification messages
 * @param {string} message - The message text to display
 * @param {string} variant - Toast variant: 'success', 'error', 'warning', 'info' (default: 'info')
 * @param {string} title - Optional title text
 * @param {boolean} showIcon - Whether to show an icon (default: true)
 * @param {boolean} showClose - Whether to show a close button (default: true)
 * @param {function} onClose - Callback function when toast is closed
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the toast element
 */
export default function Toast({ message, variant, title, showIcon, showClose, onClose, className, ...props }: ToastProps): import("react/jsx-runtime").JSX.Element;
