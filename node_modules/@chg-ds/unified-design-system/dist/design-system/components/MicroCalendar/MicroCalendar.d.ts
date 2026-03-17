import "./_micro-calendar.scss";
import type { MicroCalendarProps } from "./MicroCalendar.types";
/**
 * MicroCalendar component - A compact calendar with expand/collapse functionality
 * @param {Date} value - Selected date (optional)
 * @param {Date} month - Month to display (default: current month)
 * @param {function} onDateSelect - Callback when a date is selected: (date: Date) => void
 * @param {array} unavailableDates - Array of dates that are unavailable
 * @param {object} dateData - Object mapping dates to data (travel, onAssignment)
 * @param {boolean} defaultExpanded - Whether calendar starts expanded (default: true)
 * @param {boolean} showLegend - Whether to show the legend (default: true)
 * @param {boolean} showExpandCollapse - Whether to show the expand/collapse button (default: true)
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props
 */
export default function MicroCalendar({ value, month, onDateSelect, unavailableDates, dateData, defaultExpanded, showLegend, showExpandCollapse, className, ...props }: MicroCalendarProps): import("react/jsx-runtime").JSX.Element;
