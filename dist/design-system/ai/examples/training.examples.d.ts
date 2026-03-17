import type { UINodeTree } from "../manifest/types";
export interface AITrainingExample {
    id: string;
    scenario: string;
    kind: "valid" | "invalid";
    tags: string[];
    output: {
        tree: UINodeTree;
        manifestVersion?: string;
        governanceVersion?: string;
        policyVersion?: string;
        audit?: Record<string, unknown>;
    };
    expected: {
        status: "pass" | "fail";
        violationCodes?: string[];
    };
    rationale: {
        why: string;
        fix?: string;
    };
}
export declare const UDS_TRAINING_EXAMPLES: readonly AITrainingExample[];
