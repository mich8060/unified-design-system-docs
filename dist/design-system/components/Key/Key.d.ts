import "./_key.scss";
import type { KeyProps } from "./Key.types";
/**
 * Key component for displaying keyboard key representations
 * @param {string} label - The text or symbol to display on the key (e.g., "Esc", "⌘", "Ctrl")
 * @param {string} appearance - Visual style variant: 'light' or 'dark'
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the key element
 */
export default function Key({ label, appearance, className, ...props }: KeyProps): import("react/jsx-runtime").JSX.Element;
