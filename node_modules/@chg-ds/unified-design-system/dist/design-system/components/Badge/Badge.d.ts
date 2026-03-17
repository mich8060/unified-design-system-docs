import "./_badge.scss";
import type { BadgeProps } from "./Badge.types";
/**
 * Badge component for displaying badges
 * @param {number|string} count - The count to display (will be formatted with + if over maxCount)
 * @param {string} variant - Color variant: 'blue', 'cyan', 'green', 'magenta', 'indigo', 'rose', 'neutral', 'orange', 'purple', 'red', 'sky', 'yellow', 'inverse', 'lime'
 * @param {string} appearance - Visual style variant: 'solid' or 'outlined'
 * @param {boolean} rounded - Whether badge corners are fully rounded
 * @param {number} maxCount - Maximum count to display before showing "+" (default: 99)
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the badge element
 */
export default function Badge({ count, variant, appearance, rounded, maxCount, className, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element | null;
