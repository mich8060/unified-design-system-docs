import React from "react";
import type { ColorMode, ResolvedTheme, ThemeController, ThemeEngine } from "./theme.types";
interface ThemeProviderProps<BrandName extends string> {
    theme: ThemeEngine<BrandName>;
    initialBrand?: BrandName;
    initialMode?: ColorMode;
    target?: HTMLElement | null;
    children: React.ReactNode;
}
export declare function ThemeProvider<BrandName extends string>({ theme, initialBrand, initialMode, target, children, }: ThemeProviderProps<BrandName>): import("react/jsx-runtime").JSX.Element;
export declare function useThemeController<BrandName extends string = string>(): ThemeController<BrandName>;
export declare function useTheme<BrandName extends string = string>(): ResolvedTheme<BrandName>;
export {};
