import type { ThemeDefinition, ThemeEngine } from "./theme.types";
export declare function createTheme<BrandName extends string>(definition: ThemeDefinition<BrandName>): ThemeEngine<BrandName>;
