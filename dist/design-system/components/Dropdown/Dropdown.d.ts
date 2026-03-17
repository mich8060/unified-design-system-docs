import React from "react";
import "./_dropdown.scss";
import type { DropdownProps } from "./Dropdown.types";
/**
 * Dropdown component for custom select inputs.
 *
 * Uses ActionMenu internally for the options popover — getting click-outside,
 * keyboard navigation, placement, and focus management for free.
 *
 * @param {array} options - Array of option objects with { value, label } or array of strings
 * @param {string|number} value - Currently selected value
 * @param {function} onChange - Callback when selection changes (receives new value)
 * @param {string} placeholder - Placeholder text when no option is selected
 * @param {string} size - Size variant: 'compact' or 'default' (default: 'default')
 * @param {string} state - Visual state: 'default', 'focused', 'error', 'disabled'
 * @param {string} id - Unique identifier for the dropdown
 * @param {string} className - Additional CSS classes
 * @param {boolean} disabled - Whether the dropdown is disabled
 * @param {object} props - Additional props to pass to the trigger button
 */
declare function Dropdown({ options, value, onChange, placeholder, size, state, placement, searchable, menuFullWidth, id, className, disabled, ...props }: DropdownProps): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Dropdown>;
export default _default;
