import "./_calendar.scss";
import type { CalendarProps } from "./Calendar.types";
/**
 * Calendar — A full-size calendar component with multi-day spanning events.
 *
 * Events support `startDate` + `endDate` for multi-day spans across
 * days, weeks, and months. Renders lightweight inline event bars.
 *
 * @param {string} view - "month" (default) or "week"
 * @param {Date} defaultDate - Initial date to display (default: today)
 * @param {Date} value - Selected date (controlled)
 * @param {Array} events - Event objects (see docs for shape)
 * @param {function} onDateSelect - (date: Date) => void
 * @param {function} onEventClick - (event, e) => void
 * @param {number} maxEventsPerDay - Max event rows per cell (default: 3)
 * @param {boolean} showWeekNumbers - Show ISO week number column
 * @param {string} size - "default" or "compact"
 * @param {string} className - Additional CSS classes
 */
export default function Calendar({ view, defaultDate, value, events, onDateSelect, onEventClick, maxEventsPerDay, showWeekNumbers, size, className, ...rest }: CalendarProps): import("react/jsx-runtime").JSX.Element;
