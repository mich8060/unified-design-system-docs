export declare const IntentComponentMappings: {
    readonly primaryAction: {
        readonly component: "Button";
        readonly props: {
            readonly appearance: "primary";
        };
        readonly notes: "Use one primary action per section max.";
    };
    readonly secondaryAction: {
        readonly component: "Button";
        readonly props: {
            readonly appearance: "text";
        };
        readonly notes: "Use non-primary appearance for secondary actions.";
    };
    readonly sectionContainer: {
        readonly component: "Container";
        readonly props: {
            readonly appearance: "transparent";
            readonly padding: "large";
        };
        readonly notes: "Default section wrapper: transparent surface with 24px padding.";
    };
    readonly contentStack: {
        readonly component: "Layout";
        readonly props: {
            readonly direction: "column";
            readonly gap: "--uds-spacing-16";
        };
        readonly notes: "Primary stack for vertical rhythm.";
    };
    readonly formFieldWrapper: {
        readonly component: "Field";
        readonly notes: "Wrap inputs that require label/helper/error messaging.";
    };
    readonly textInputControl: {
        readonly component: "TextInput";
        readonly notes: "Use TextInput for freeform single-line text.";
    };
    readonly selectionControl: {
        readonly component: "Dropdown";
        readonly notes: "Use Dropdown for controlled selection.";
    };
    readonly statusIndicator: {
        readonly component: "Status";
        readonly notes: "Use semantic status component for state communication.";
    };
    readonly badgeLabel: {
        readonly component: "Tag";
        readonly notes: "Use Tag for concise categorical labels.";
    };
    readonly contextualActions: {
        readonly component: "ActionMenu";
        readonly notes: "Use ActionMenu for row/object-level secondary actions.";
    };
    readonly dataPresentation: {
        readonly component: "Table";
        readonly notes: "Use Table for tabular datasets and structured records.";
    };
    readonly confirmationDialog: {
        readonly component: "Modal";
        readonly notes: "Use Modal for confirmation/destructive decision points.";
    };
};
