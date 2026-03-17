import "./_action-menu.scss";
import type { ActionMenuProps } from "./ActionMenu.types";
/**
 * ActionMenu component - A dropdown menu for actions
 * @param {React.ReactNode} trigger - Required trigger element (use Button component)
 * @param {array} items - Array of menu items: { label, icon, onClick, disabled, destructive, divider, items (for submenus) }
 * @param {string} placement - Menu placement: 'bottom-start', 'bottom-end', 'top-start', 'top-end'
 * @param {boolean} fullWidth - When true, the menu matches the trigger width
 * @param {boolean} disabled - Whether the menu is disabled
 * @param {function} onOpenChange - Callback when open state changes: (isOpen: boolean) => void
 * @param {string} className - Additional CSS classes
 * @param {string} menuClassName - Additional CSS classes for the menu panel
 * @param {object} props - Additional props
 */
export default function ActionMenu({ trigger, items, placement, variant, searchPlaceholder, noResultsText, fullWidth, disabled, onOpenChange, className, menuClassName, ...props }: ActionMenuProps): import("react/jsx-runtime").JSX.Element;
