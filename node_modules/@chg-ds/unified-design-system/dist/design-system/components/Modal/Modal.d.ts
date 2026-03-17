import React from "react";
import "./_modal.scss";
import type { ModalProps } from "./Modal.types";
/**
 * Modal component — Accessible dialog overlay
 *
 * A standalone, controlled modal that renders via a portal.
 * Supports title/subtitle/badge header, scrollable content, footer actions,
 * size variants, backdrop click dismissal, and Escape key dismissal.
 *
 * @param {boolean}       open             - Whether the modal is visible
 * @param {function}      onClose          - Called when the user requests close (Escape, backdrop, X button)
 * @param {string}        title            - Header title text
 * @param {string}        subtitle         - Header subtitle text
 * @param {React.ReactNode} badge          - Optional badge element next to the title
 * @param {React.ReactNode} header         - Custom header override (replaces title/subtitle/badge)
 * @param {React.ReactNode} footer         - Footer content (typically action buttons)
 * @param {string}        size             - "small" (480px) | "default" (640px) | "large" (800px) | "fullscreen"
 * @param {boolean}       closeOnBackdrop  - Close when clicking the overlay backdrop (default true)
 * @param {boolean}       closeOnEscape    - Close on Escape key press (default true)
 * @param {HTMLElement}   container        - Portal target element (default document.body)
 * @param {string}        className        - Additional CSS classes for the dialog panel
 * @param {React.ReactNode} children       - Modal body content
 * @param {object}        props            - Additional props spread onto the dialog element
 */
declare function Modal({ open, onClose, title, subtitle, badge, header, footer, size, closeOnBackdrop, closeOnEscape, container, className, children, ...props }: ModalProps): React.ReactPortal | null;
declare const _default: React.MemoExoticComponent<typeof Modal>;
export default _default;
