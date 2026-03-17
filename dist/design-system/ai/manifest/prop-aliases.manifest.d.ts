export interface PropAliasManifest {
    global: Record<string, string>;
    byComponent: Record<string, Record<string, string>>;
}
export declare const PropAliasRules: PropAliasManifest;
export declare function getCanonicalPropName(componentName: string, propName: string): string;
export declare function getAliasEntries(componentName: string): Array<{
    alias: string;
    canonical: string;
}>;
