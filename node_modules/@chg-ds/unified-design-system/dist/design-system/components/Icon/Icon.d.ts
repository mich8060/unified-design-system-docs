import React from "react";
import "./_icon.scss";
import type { IconProps } from "./Icon.types";
/**
 * Icons component wrapper for Phosphor icons
 * @param {string} name - The name of the Phosphor icon (e.g., "ArrowRight", "User", "House")
 * @param {number|string} size - The size of the icon (default: 24)
 * @param {string} appearance - Optional: "regular" | "bold" | "thin" | "light" | "duotone" | "fill" (default: "regular")
 * @param {object} props - Additional props to pass to the icon component
 */
declare function Icon({ name, size, appearance, ...props }: IconProps): React.ReactElement<{
    size?: number;
    weight?: string;
    className?: string;
} & Record<string, unknown>, string | React.JSXElementConstructor<any>> | null;
declare const _default: React.MemoExoticComponent<typeof Icon>;
export default _default;
