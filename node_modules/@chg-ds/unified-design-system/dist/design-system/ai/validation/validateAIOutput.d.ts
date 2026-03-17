import type { GovernanceConfig, VersionLineage } from "../manifest/types";
import type { PolicyViolation } from "../policies/policy.types";
export interface AIValidationResult {
    status: "pass" | "fail";
    violations: PolicyViolation[];
    warnings: PolicyViolation[];
    deterministicFeedback?: {
        fingerprint: string;
        summary: string;
        items: Array<{
            id: string;
            code: string;
            path: string;
            message: string;
            fix: string;
            severity: "error" | "warning";
        }>;
    };
    governanceVersionUsed: string;
    manifestVersionUsed: string;
    policyVersionUsed: string;
    timestamp: string;
    versionLineage: VersionLineage;
}
export declare function validateAIOutput(output: unknown, governanceConfig?: GovernanceConfig): AIValidationResult;
