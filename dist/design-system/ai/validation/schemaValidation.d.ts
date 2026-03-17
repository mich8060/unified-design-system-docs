import type { UINodeTree } from "../manifest/types";
import type { PolicyViolation } from "../policies/policy.types";
export declare function validateSchema(output: unknown): {
    valid: boolean;
    violations: PolicyViolation[];
    tree?: UINodeTree;
};
