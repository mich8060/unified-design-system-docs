import "./_breadcrumb.scss";
import type { BreadcrumbProps } from "./Breadcrumb.types";
/**
 * Breadcrumb component for page navigation
 * @param {Array} items - Optional array of breadcrumb items (max 5). Each item should have { label: string, href?: string }
 *                        If href is provided, the item will be a link. The last item is always the current page (no link).
 */
export default function Breadcrumb({ items }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element | null;
