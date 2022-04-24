import type { SystemProps } from "@/styling/props/systemProps";
import type { TextProps } from "@/styling/props/textProps";
import { contentColorConfig } from "./color";

// Default values taken from: https://github.com/chakra-ui/chakra-ui/blob/next/packages/theme/src/styles.ts
export const globalContentConfig: SystemProps & TextProps = {
  family: "body",
  lineHeight: "base",
  wordWrap: "break-word",

  color: contentColorConfig.fg,
  backgroundColor: contentColorConfig.bg,
  borderColor: contentColorConfig.border,
};