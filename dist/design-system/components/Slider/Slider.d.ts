import "./_slider.scss";
import type { SliderProps } from "./Slider.types";
/**
 * Slider component for selecting values within a range
 * @param {number|array} value - Current value(s). For single slider: number. For range slider: [min, max] array
 * @param {function} onChange - Callback function when slider value changes
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} step - Step increment
 * @param {boolean} range - Whether to use range mode (two handles)
 * @param {boolean} showLabels - Whether to show value labels
 * @param {string} label - Optional label text to display above the slider
 * @param {boolean} disabled - Whether the slider is disabled
 * @param {string} className - Additional CSS classes
 * @param {string} 'aria-label' - Accessible label for screen readers
 * @param {object} props - Additional props to pass to the slider element
 */
export default function Slider({ value: controlledValue, onChange, min, max, step, range, showLabels, label, disabled, className, "aria-label": ariaLabel, ...props }: SliderProps): import("react/jsx-runtime").JSX.Element;
