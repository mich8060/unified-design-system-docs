import "./_file-upload.scss";
import type { FileUploadProps } from "./FileUpload.types";
/**
 * FileUpload component for drag-and-drop and click-to-upload file selection
 * @param {function} onFileSelect - Callback function when files are selected (receives FileList)
 * @param {array} accept - Array of accepted file types (e.g., ['image/png', 'image/jpg'])
 * @param {number} maxSize - Maximum file size in MB (default: 10)
 * @param {string} acceptText - Text to display accepted file types (e.g., "PNG, JPG")
 * @param {string} instructionText - Custom instruction text (default: "Drop files here or click to upload")
 * @param {boolean} multiple - Whether to allow multiple file selection (default: false)
 * @param {boolean} disabled - Whether the upload is disabled
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the file input
 */
export default function FileUpload({ onFileSelect, accept, maxSize, acceptText, instructionText, size, multiple, disabled, className, ...props }: FileUploadProps): import("react/jsx-runtime").JSX.Element;
