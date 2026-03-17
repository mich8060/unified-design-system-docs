export type ContainerMode = "max" | "fluid" | "none";
export type DensityMode = "compact" | "comfortable";
export type PaddingMode = "standard" | "none";
export interface ShellLayoutConfig {
    header?: boolean;
    sidebar?: boolean;
    breadcrumb?: boolean;
    footer?: boolean;
    padding?: PaddingMode;
    container?: ContainerMode;
    subNav?: boolean;
    brandSwitcher?: boolean;
    density?: DensityMode;
}
export declare const defaultLayout: Required<ShellLayoutConfig>;
