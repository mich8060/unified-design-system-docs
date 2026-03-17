export interface CompositionPairConstraint {
    parent: string;
    child: string;
    reason?: string;
}
export interface CompositionConstraints {
    allowedChildrenByParent: Record<string, string[]>;
    allowedParentsByChild: Record<string, string[]>;
    disallowedPairs: CompositionPairConstraint[];
}
export declare const CompositionRules: CompositionConstraints;
