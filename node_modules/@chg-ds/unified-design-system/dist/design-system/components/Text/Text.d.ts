import React from "react";
import type { TextProps } from "./Text.types";
import "./_text.scss";
export declare function Text<T extends React.ElementType = "p">({ as, variant, weight, leading, className, children, ...rest }: TextProps<T>): import("react/jsx-runtime").JSX.Element;
