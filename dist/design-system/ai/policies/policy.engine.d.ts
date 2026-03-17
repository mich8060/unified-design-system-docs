import type { GovernanceConfig, UINodeTree } from "../manifest/types";
import type { PolicyViolation } from "./policy.types";
export declare function runPolicyEngine(tree: UINodeTree, governanceConfig?: GovernanceConfig, options?: {
    patternId?: string;
}): PolicyViolation[];
