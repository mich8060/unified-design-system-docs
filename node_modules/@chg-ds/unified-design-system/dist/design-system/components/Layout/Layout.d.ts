import React from "react";
import "./_layout.scss";
import type { FlexItemProps, FlexProps } from "./Layout.types";
declare const LayoutBase: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLElement>>;
declare const FlexFill: React.ForwardRefExoticComponent<FlexItemProps & React.RefAttributes<HTMLElement>>;
type FlexCompound = typeof LayoutBase & {
    Fill: typeof FlexFill;
    Full: typeof FlexFill;
};
type LayoutCompound = typeof LayoutBase & {
    Fill: typeof FlexFill;
    Full: typeof FlexFill;
};
export declare const Layout: LayoutCompound;
export declare const Flex: FlexCompound;
export {};
