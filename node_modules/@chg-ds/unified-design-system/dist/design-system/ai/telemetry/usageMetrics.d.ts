export interface UsageMetric {
    metricType: "component_used" | "rule_violation" | "token_override" | "strict_mode_failure";
    name: string;
    value?: number;
    timestamp?: string;
}
export declare function recordUsageMetric(metric: UsageMetric): void;
export declare function getUsageMetrics(): Record<string, number>;
export declare function resetUsageMetrics(): void;
