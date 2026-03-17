import React from "react";
import "./_tabs.scss";
import type { TabsProps } from "./Tabs.types";
/**
 * Tabs component - A simple complete tab group
 *
 * @param {Array} tabs - Array of tab objects: [{ label, icon?, tag?, onClick? }, ...]
 * @param {string} appearance - Visual style variant: 'underline', 'block', or 'block-inverted'
 * @param {number} activeTab - Index of the currently active tab (0-based)
 * @param {boolean} fill - Whether tabs should fill available width (default: false)
 * @param {boolean} scrollable - Whether tabs should scroll when overflowing (default: false)
 * @param {function} onTabChange - Callback when tab changes: (index) => void
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the tabs container
 */
declare function Tabs({ tabs, appearance, orientation, activeTab, fill, scrollable, onTabChange, className, ...props }: TabsProps): import("react/jsx-runtime").JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof Tabs>;
export default _default;
