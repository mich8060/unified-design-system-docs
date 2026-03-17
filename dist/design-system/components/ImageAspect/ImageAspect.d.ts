import "./_image-aspect.scss";
import type { ImageAspectProps } from "./ImageAspect.types";
/**
 * ImageAspect component for maintaining consistent aspect ratios for images
 * @param {string} ratio - Aspect ratio variant: 'square', 'video', '4-3', '3-2', '21-9', 'portrait', 'auto'
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the image element
 */
export default function ImageAspect({ ratio, src, alt, className, ...props }: ImageAspectProps): import("react/jsx-runtime").JSX.Element;
