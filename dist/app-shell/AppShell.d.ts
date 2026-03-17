import React from "react";
import type { ShellLayoutConfig } from "./layout.types";
import "./shell.scss";
export interface AppShellSlots {
    Header?: React.ReactNode;
    Sidebar?: React.ReactNode;
    Breadcrumb?: React.ReactNode;
    Footer?: React.ReactNode;
    SubNav?: React.ReactNode;
}
/**
 * Public props for the AppShell root component.
 *
 * @example
 * ```tsx
 * <AppShell brand="comphealth" theme="dark">
 *   <AppShell.Menu>...</AppShell.Menu>
 *   <AppShell.Content>
 *     <AppShell.Listview>...</AppShell.Listview>
 *     <AppShell.Main>...</AppShell.Main>
 *     <AppShell.SidePanel>...</AppShell.SidePanel>
 *   </AppShell.Content>
 * </AppShell>
 * ```
 */
export interface AppShellProps {
    layout?: ShellLayoutConfig;
    slots?: AppShellSlots;
    children?: React.ReactNode;
    /** Standalone mode: no navigation/menu spacing (desktop/mobile). */
    standalone?: boolean;
    brand?: string;
    theme?: "light" | "dark";
    className?: string;
    skipToContent?: boolean;
    skipToContentLabel?: string;
    mainContentId?: string;
    mobileBrandLabel?: string;
    mobileUserName?: string;
    mobileUserInitials?: string;
    mobileUserAvatarSrc?: string;
    mobileAccountMenuItems?: unknown[];
}
/** Slot wrapper props used by AppShell compound regions. */
export interface AppShellSectionProps {
    children?: React.ReactNode;
    /** Optional width for rail regions like AppShell.SidePanel (e.g. 420 or "28rem"). */
    width?: number | string;
    /** Optional maximum width for rail regions like AppShell.SidePanel (e.g. 480 or "32rem"). */
    maxWidth?: number | string;
}
type AppShellSlotName = "Menu" | "Content" | "Listview" | "Main" | "SidePanel" | "Footer";
type AppShellSlotComponent = React.FC<AppShellSectionProps> & {
    __appShellSlot?: AppShellSlotName;
};
declare const AppShellMenuSlot: AppShellSlotComponent;
declare const AppShellContentSlot: AppShellSlotComponent;
declare const AppShellListviewSlot: AppShellSlotComponent;
declare const AppShellMainSlot: AppShellSlotComponent;
declare const AppShellSidePanelSlot: AppShellSlotComponent;
declare const AppShellFooterSlot: AppShellSlotComponent;
type AppShellCompound = React.FC<AppShellProps> & {
    Menu: typeof AppShellMenuSlot;
    Content: typeof AppShellContentSlot;
    Listview: typeof AppShellListviewSlot;
    Main: typeof AppShellMainSlot;
    SidePanel: typeof AppShellSidePanelSlot;
    Footer: typeof AppShellFooterSlot;
};
export declare const AppShell: AppShellCompound;
export {};
