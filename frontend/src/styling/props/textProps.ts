import { css, type CSSObject } from "@emotion/css";
import { writeResponsivePropToStyle, type Responsive } from "../responsive";
import type { PropType } from "vue";
import type { TypeFromProps } from "@/lib/typeFromProps";
import {
  type FontFamily,
  type FontSize,
  type FontWeight,
  type LineHeight,
  type LetterSpacing,
  type Alignment,
  type WordWrap,
  fontFamilyWriter,
  fontSizeWriter,
  fontWeightWriter,
  letterSpacingWriter,
  lineHeightWriter,
  wordWrapWriter,
  aligmentWriter,
} from "../text";

export const textProps = {
  family: {
    type: [Object, String] as PropType<Responsive<FontFamily>>,
  },
  size: {
    type: [Object, String] as PropType<Responsive<FontSize>>,
  },
  weight: {
    type: [Object, String] as PropType<Responsive<FontWeight>>,
  },
  lineHeight: {
    type: [Object, String] as PropType<Responsive<LineHeight>>,
  },
  letterSpacing: {
    type: [Object, String] as PropType<Responsive<LetterSpacing>>,
  },

  alignment: {
    type: [Object, String] as PropType<Responsive<Alignment>>,
  },
  wordWrap: {
    type: [Object, String] as PropType<Responsive<WordWrap>>,
  },
} as const;

export type TextProps = TypeFromProps<typeof textProps>;

export const createTextPropsCss = (props: TextProps): string => {
  const style: CSSObject = {};
  writeResponsivePropToStyle(
    style,
    "fontFamily",
    fontFamilyWriter,
    props.family
  );
  writeResponsivePropToStyle(style, "fontSize", fontSizeWriter, props.size);
  writeResponsivePropToStyle(
    style,
    "fontWeight",
    fontWeightWriter,
    props.weight
  );
  writeResponsivePropToStyle(
    style,
    "lineHeight",
    lineHeightWriter,
    props.lineHeight
  );
  writeResponsivePropToStyle(
    style,
    "letterSpacing",
    letterSpacingWriter,
    props.letterSpacing
  );

  writeResponsivePropToStyle(
    style,
    "textAlign",
    aligmentWriter,
    props.alignment
  );

  writeResponsivePropToStyle(style, "wordWrap", wordWrapWriter, props.wordWrap);

  return css(style);
};