import "./_avatar.scss";
import type { AvatarProps } from "./Avatar.types";
/**
 * Avatar component for displaying user photos or initials
 * @param {string} src - Image source URL for user photo
 * @param {string} initials - Initials to display (e.g., "EB", "JD")
 * @param {boolean} status - Whether to show the status indicator (green dot)
 * @param {string} size - Size of the avatar: 'small', 'default', 'large' (default: 'default')
 * - small: 36x36
 * - default: 48x48
 * - large: 64x64
 * @param {string} className - Additional CSS classes
 * @param {string} alt - Alt text for the image
 * @param {boolean} showCameraButton - Whether to show the camera action button overlay
 * @param {string} cameraButtonAriaLabel - Accessible label for camera action button
 * @param {function} onCameraClick - Callback for camera action button click
 * @param {object} props - Additional props to pass to the avatar container
 */
export default function Avatar({ src, initials, status, size, showCameraButton, cameraButtonAriaLabel, onCameraClick, className, alt, name, ...props }: AvatarProps): import("react/jsx-runtime").JSX.Element;
