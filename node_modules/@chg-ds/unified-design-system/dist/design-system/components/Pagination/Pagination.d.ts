import "./_pagination.scss";
import type { PaginationProps } from "./Pagination.types";
/**
 * Pagination component
 * @param {number} currentPage - Current active page (1-indexed)
 * @param {number} totalPages - Total number of pages
 * @param {function} onPageChange - Callback when page changes: (page: number) => void
 * @param {string} variant - Variant style: "default" | "line"
 * @param {boolean} showJumpInput - Toggle jump-to-page input
 * @param {boolean} showDoubleButtons - Toggle first/last page buttons
 * @param {boolean} showFirstLast - Backward-compatible alias for showDoubleButtons
 * @param {string} className - Additional CSS classes
 */
export default function Pagination({ currentPage, totalPages, onPageChange, variant, showJumpInput, showDoubleButtons, showFirstLast, className, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
