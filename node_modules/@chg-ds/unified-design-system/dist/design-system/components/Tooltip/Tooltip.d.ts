import "./_tooltip.scss";
import type { TooltipProps } from "./Tooltip.types";
/**
 * Tooltip component that displays a message when hovering over its children
 * @param {ReactNode} children - The element that triggers the tooltip
 * @param {string} content - The tooltip message text
 * @param {string} placement - Tooltip placement: 'top', 'bottom', 'left', 'right' (default: 'top')
 * @param {boolean} disabled - Whether the tooltip is disabled
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the wrapper element
 */
export default function Tooltip({ children, content, placement, disabled, defaultVisible, className, ...props }: TooltipProps): import("react/jsx-runtime").JSX.Element;
