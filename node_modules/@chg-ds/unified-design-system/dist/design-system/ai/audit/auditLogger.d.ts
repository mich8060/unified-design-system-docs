import type { AuditEvent, AuditTransport } from "./audit.types";
export declare function logAIGeneration(event: AuditEvent, transport?: AuditTransport): Promise<void>;
