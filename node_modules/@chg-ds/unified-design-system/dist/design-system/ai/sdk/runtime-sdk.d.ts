import { ComponentRegistry } from "../manifest/components.manifest";
import { UDSManifest } from "../manifest/system.manifest";
import type { GovernanceConfig, VersionLineage } from "../manifest/types";
import { type AIValidationResult } from "../validation/validateAIOutput";
export interface CanonicalizedPropsResult {
    canonicalProps: Record<string, unknown>;
    aliasesApplied: Record<string, string>;
}
export interface UDSRuntimeHelperSDK {
    readonly governance: GovernanceConfig;
    getVersionLineage(): VersionLineage;
    getManifest(): typeof UDSManifest;
    getComponent(componentName: string): (typeof ComponentRegistry)[string] | undefined;
    canonicalizeProps(componentName: string, props: Record<string, unknown>): CanonicalizedPropsResult;
    validate(output: unknown): AIValidationResult;
    validateOrThrow(output: unknown): AIValidationResult;
}
export interface CreateUDSRuntimeHelperSDKOptions {
    governance?: GovernanceConfig;
}
export declare function createUDSRuntimeHelperSDK(options?: CreateUDSRuntimeHelperSDKOptions): UDSRuntimeHelperSDK;
