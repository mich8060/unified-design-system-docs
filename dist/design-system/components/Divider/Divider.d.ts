import "./_divider.scss";
import type { DividerProps } from "./Divider.types";
/**
 * Divider component for separating content sections
 * @param {string} variant - Variant style: 'line' (default) or 'solid' (8px solid box)
 * @param {string} label - Optional text label to display on the divider (only for 'line' variant)
 * @param {string} icon - Optional icon name to display on the divider (only for 'line' variant)
 * @param {string} alignment - Alignment of label/icon: 'left', 'center', or 'right' (only for 'line' variant)
 * @param {boolean} labelWithIcon - Whether to show icon within the label text (e.g., "+ Divider Label") (only for 'line' variant)
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the divider element
 */
export default function Divider({ variant, label, icon, alignment, labelWithIcon, className, ...props }: DividerProps): import("react/jsx-runtime").JSX.Element;
