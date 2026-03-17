import "./_chip.scss";
import type { ChipProps } from "./Chip.types";
/**
 * Chip component for displaying labels, tags, or filters
 * @param {string} label - The text content of the chip
 * @param {boolean} selected - Selected state (unselected by default)
 * @param {boolean} rounded - Shape toggle: true (fully rounded), false (less rounded)
 * @param {string} size - Size variant: 'default', 'compact', or 'mini'
 * @param {string} iconPlacement - Icon placement: 'both', 'left', 'right', or 'none'
 * @param {string} icon - Icon name to display (when iconPlacement is not 'none')
 * @param {number|string} badge - Badge count to display
 * @param {string} badgeVariant - Badge color variant (default: 'red')
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler function
 * @param {boolean} disabled - Whether the chip is disabled
 * @param {object} props - Additional props to pass to the chip element
 */
export default function Chip({ label, selected, rounded, size, iconPlacement, icon, badge, badgeVariant, className, onClick, disabled, ...props }: ChipProps): import("react/jsx-runtime").JSX.Element;
