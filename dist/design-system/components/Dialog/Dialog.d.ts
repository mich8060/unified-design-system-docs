import React from "react";
import "./_dialog.scss";
import type { DialogProps } from "./Dialog.types";
/**
 * Dialog component — Purpose-built confirmation / alert overlay
 *
 * A focused, intent-driven dialog for confirmations, warnings, alerts,
 * and simple prompts. Smaller and more opinionated than Modal.
 *
 * @param {boolean}        open              Whether the dialog is visible
 * @param {function}       onClose           Called when the user dismisses the dialog
 * @param {string}         intent            "info" | "success" | "warning" | "destructive"
 * @param {string}         icon              Override the default intent icon (Phosphor icon name)
 * @param {string}         title             Dialog heading
 * @param {string}         description       Supporting text below the title
 * @param {string}         confirmLabel      Primary action button label (default "Confirm")
 * @param {string}         cancelLabel       Secondary action button label (default "Cancel")
 * @param {function}       onConfirm         Called when the primary action is clicked
 * @param {function}       onCancel          Called when the secondary action is clicked (defaults to onClose)
 * @param {boolean}        showCancel        Whether to show the cancel button (default true)
 * @param {boolean}        loading           Show loading state on the confirm button
 * @param {boolean}        closeOnBackdrop   Close when clicking the overlay (default true)
 * @param {boolean}        closeOnEscape     Close on Escape key (default true)
 * @param {HTMLElement}    container         Portal target (default document.body)
 * @param {string}         className         Additional CSS classes
 * @param {React.ReactNode} children         Optional custom body content below description
 * @param {object}         props             Additional props spread onto the dialog element
 */
export default function Dialog({ open, onClose, intent, icon, title, description, confirmLabel, cancelLabel, onConfirm, onCancel, showCancel, loading, closeOnBackdrop, closeOnEscape, container, className, children, ...props }: DialogProps): React.ReactPortal | null;
