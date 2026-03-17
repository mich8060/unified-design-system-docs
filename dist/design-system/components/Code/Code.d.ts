import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "./_code.scss";
import type { CodeProps } from "./Code.types";
export default function Code({ code, language, inline, className, ...rest }: CodeProps): import("react/jsx-runtime").JSX.Element;
