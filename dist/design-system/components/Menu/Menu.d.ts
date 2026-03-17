import React from "react";
import "./_menu.scss";
import type { MenuProps } from "./Menu.types";
declare function Menu({ title, className, navItems, brands, activeBrand, onBrandChange, activeMode, onModeChange, showBrand, showSearch, showBrandSwitcher, showNav, showModeToggle, showUser, userName, userInitials, userAvatarSrc, accountMenuItems, identity, defaultExpanded, }: MenuProps): import("react/jsx-runtime").JSX.Element;
declare namespace Menu {
    var defaultProps: {
        title: string;
    };
}
declare const _default: React.MemoExoticComponent<typeof Menu>;
export default _default;
