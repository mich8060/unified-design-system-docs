import type { UINodeTree } from "../manifest/types";
import type { PolicyViolation } from "../policies/policy.types";
export declare function detectDrift(tree: UINodeTree): PolicyViolation[];
