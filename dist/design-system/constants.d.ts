import type { ButtonAppearance, ButtonLayout, ButtonSize } from "./components/Button/Button.types";
import type { FlexAlignItems, FlexDirection, FlexGapToken, FlexJustifyContent, FlexWrap } from "./components/Layout/Layout.types";
import type { IconAppearance } from "./components/Icon/Icon.types";
import type { TextLeading, TextVariant, TextWeight } from "./components/Text/Text.types";
import type { TextInputIconPosition, TextInputSize, TextInputState } from "./components/TextInput/TextInput.types";
import type { MenuMode } from "./components/Menu/Menu.types";
/** Valid values for Button `appearance`. */
export declare const BUTTON_APPEARANCES: readonly ButtonAppearance[];
/** Valid values for Button `layout`. */
export declare const BUTTON_LAYOUTS: readonly ButtonLayout[];
/** Valid values for Button `size`. */
export declare const BUTTON_SIZES: readonly ButtonSize[];
/** Valid values for Text `variant`. */
export declare const TEXT_VARIANTS: readonly TextVariant[];
/** Valid values for Text `weight`. */
export declare const TEXT_WEIGHTS: readonly TextWeight[];
/** Valid values for Text `leading`. */
export declare const TEXT_LEADINGS: readonly TextLeading[];
/** Valid values for Flex `direction`. */
export declare const FLEX_DIRECTIONS: readonly FlexDirection[];
/** Valid values for Flex `justifyContent`. */
export declare const FLEX_JUSTIFY_CONTENT: readonly FlexJustifyContent[];
/** Valid values for Flex `alignItems`. */
export declare const FLEX_ALIGN_ITEMS: readonly FlexAlignItems[];
/** Valid values for Flex `wrap`. */
export declare const FLEX_WRAP_VALUES: readonly FlexWrap[];
/** Valid values for Flex tokenized gap presets. */
export declare const FLEX_GAP_TOKENS: readonly FlexGapToken[];
/** Valid values for TextInput `size`. */
export declare const TEXT_INPUT_SIZES: readonly TextInputSize[];
/** Valid values for TextInput `state`. */
export declare const TEXT_INPUT_STATES: readonly TextInputState[];
/** Valid values for TextInput `iconPosition`. */
export declare const TEXT_INPUT_ICON_POSITIONS: readonly TextInputIconPosition[];
/** Valid values for Icon `appearance`. */
export declare const ICON_APPEARANCES: readonly IconAppearance[];
/** Valid values for Menu and AppShell `theme` / mode controls. */
export declare const MENU_MODES: readonly MenuMode[];
