import type { TokenCategory } from "./types.js";
type Tone11 = "25" | "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "1000";
type Tone10 = Exclude<Tone11, "1000">;
type Scale11 = Record<Tone11, string>;
type Scale10 = Record<Tone10, string>;
export declare const colorTokens: {
    readonly system: {
        readonly black: "#111111";
        readonly white: "#ffffff";
        readonly transparent: "rgba(255, 255, 255, 0.0099999998)";
    };
    readonly neutrals: Scale11;
    readonly brand: {
        readonly primary: Scale10;
        readonly secondary: Scale10;
        readonly tertiary: Scale10;
        readonly quaternary: Scale10;
    };
    readonly accent: {
        readonly amber: Scale11;
        readonly aqua: Scale11;
        readonly blue: Scale11;
        readonly cyan: Scale11;
        readonly emerald: Scale11;
        readonly fuchsia: Scale11;
        readonly green: Scale11;
        readonly indigo: Scale11;
        readonly lime: Scale11;
        readonly magenta: Scale11;
        readonly orange: Scale11;
        readonly purple: Scale11;
        readonly red: Scale11;
        readonly rose: Scale11;
        readonly sky: Scale11;
        readonly violet: Scale11;
        readonly yellow: Scale11;
    };
};
export declare const colorCategory: TokenCategory;
export {};
