import type { PolicyViolation } from "../policies/policy.types";
export interface DeterministicViolationFeedback {
    id: string;
    code: string;
    path: string;
    message: string;
    fix: string;
    severity: "error" | "warning";
}
export declare function sortAndDedupeViolations(violations: PolicyViolation[]): PolicyViolation[];
export declare function buildDeterministicFeedback(violations: PolicyViolation[]): {
    fingerprint: string;
    summary: string;
    items: DeterministicViolationFeedback[];
};
