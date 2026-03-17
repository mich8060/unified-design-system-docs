import "./_datepicker.scss";
import type { DatepickerProps } from "./Datepicker.types";
/**
 * Datepicker component - A calendar component for date selection with range support
 * @param {Date} value - Selected date (optional)
 * @param {Date} startDate - Start date for range selection (optional)
 * @param {Date} endDate - End date for range selection (optional)
 * @param {Date} month - Month to display (default: current month)
 * @param {function} onDateSelect - Callback when a date is selected: (date: Date) => void
 * @param {array} unavailableDates - Array of dates that are unavailable
 * @param {object} dateData - Object mapping dates to data (travel, onAssignment)
 * @param {string} size - Calendar size: 'desktop' or 'mobile' (default: 'desktop')
 * @param {boolean} showWeekdays - Whether to show weekday header (default: true)
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props
 */
export default function Datepicker({ value, startDate, endDate, month, onDateSelect, unavailableDates, dateData, size, showWeekdays, className, ...props }: DatepickerProps): import("react/jsx-runtime").JSX.Element;
