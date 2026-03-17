import React from "react";
interface TabItemProps {
    label?: string | number;
    appearance?: "underline" | "block" | "block-inverted";
    active?: boolean;
    icon?: string | boolean;
    tag?: string | number | boolean;
    tagVariant?: string;
    className?: string;
    onClick?: (...args: unknown[]) => void;
    [key: string]: unknown;
}
declare function TabItem({ label, appearance, active, icon, tag, tagVariant, className, onClick, ...props }: TabItemProps): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof TabItem>;
export default _default;
