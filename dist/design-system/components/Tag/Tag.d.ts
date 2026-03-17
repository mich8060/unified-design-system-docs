import "./_tag.scss";
import type { TagProps } from "./Tag.types";
/**
 * Tag component for displaying labels with optional icons
 *
 * @param {string} label - The text content of the tag
 * @param {string} appearance - Visual style variant: 'label-only' or 'icon-left'
 * @param {string} size - Size variant: 'compact' or 'default'
 * @param {string} color - Color variant: 'transparent', 'neutral', 'red', 'orange', 'yellow', 'emerald', 'green', 'sky', 'cyan', 'blue', 'indigo', 'purple', 'fuchsia', 'magenta', 'inverse'
 * @param {boolean} rounded - Whether to use rounded corners (default: true)
 * @param {boolean} solid - Whether to use solid background (default: false)
 * @param {boolean} outlined - Whether to use outlined treatment (default: false)
 * @param {boolean} pastel - Whether to use lighter pastel treatment (default: false)
 * @param {string|ReactNode} icon - Icon name or custom node (when appearance is 'icon-left')
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler function
 * @param {object} props - Additional props to pass to the tag element
 */
export default function Tag({ label, appearance, size, color, rounded, solid, outlined, pastel, icon, className, onClick, ...props }: TagProps): import("react/jsx-runtime").JSX.Element;
