import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import {
  toPropValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
} from 'utils/styles'

//テキストバリアント
export type TextVariant = "xs" | "sm" | "md" | "mdl" | "lg" | "xl"

export type TextProps = {
  /**
   * テキストバリアント
   * @default - md
   */
  variant?: TextVariant
  /**
   * フォントサイズ
   */
  fontSize?: Responsive<FontSize>
  /**
  * フォントウェイト
  */
  fontWeight?: Responsive<string>
  /**
  * 字間のスペース
  */
  letterSpacing?: Responsive<LetterSpacing>
  /**
  * ベースラインの高さ
  */
  lineHeight?: Responsive<LineHeight>
  /**
  * テキストの位置
  */
  textAlign?: Responsive<string>
  /**
  * 文字の色
  */
  color?: Responsive<Color>
  /**
  * 文字の背景色
  */
  backgroundColor?: Responsive<Color>
  /**
   * コンテンツ領域の幅
   */
  width?: Responsive<string>
  /**
   * コンテンツ領域の高さ
   */
  height?: Responsive<string>
  /**
   * コンテンツ領域の最小幅
   */
  minWidth?: Responsive<string>
  /**
   * コンテンツ領域の最小の高さ
   */
  minHeight?: Responsive<string>
  /**
   * displayプロパティ
   */
  display?: Responsive<string>
  /**
   * ボーダー
   */
  border?: Responsive<string>
  /**
   * コンテンツ領域を超えた時のプロパティ
   * @example visible | hidden | scroll ...etc
   */
  overflow?: Responsive<string>
  /**
   * マージン
   */
  margin?: Responsive<Space>
  /**
   * 上部マージン
   */
  marginTop?: Responsive<Space>
  /**
   * 右マージン
   */
  marginRight?: Responsive<Space>
  /**
   * 下部マージン
   */
  marginBottom?: Responsive<Space>
  /**
   * 左マージン
   */
  marginLeft?: Responsive<Space>
  /**
   * パディング
   */
  padding?: Responsive<Space>
  /**
   * 上部パディング
   */
  paddingTop?: Responsive<Space>
  /**
   * 右パディング
   */
  paddingRight?: Responsive<Space>
  /**
   * 下部パディング
   */
  paddingBottom?: Responsive<Space>
  /**
   * 左パディング
   */
  paddingLeft?: Responsive<Space>
}

const variants: { [ key in TextVariant ]: { [key in keyof TextProps]?: TextProps[key] } } = {
  xs: {
    fontSize: 'extraSmall',
    letterSpacing: 0,
    lineHeight: 0,
  },
  sm: {
    fontSize: 'small',
    letterSpacing: 1,
    lineHeight: 1,
  },
  md: {
    fontSize: 'medium',
    letterSpacing: 2,
    lineHeight: 2,
  },
  mdl: {
    fontSize: 'mediumLarge',
    letterSpacing: 3,
    lineHeight: 3,
  },
  lg: {
    fontSize: 'large',
    letterSpacing: 4,
    lineHeight: 4,
  },
  xl: {
    fontSize: 'extraLarge',
    letterSpacing: 5,
    lineHeight: 5,
  },
}

/**
 * タイポグラフィーに関するコンポーネント
 */
const Text = styled.span<TextProps>`
${({ variant, fontSize, letterSpacing, lineHeight, theme }) => {
  if(variant && variants[variant]){
    const styles = []
    !fontSize && styles.push(toPropValue("font-size", variants[variant].fontSize, theme))
    !letterSpacing && styles.push(toPropValue('letter-spacing', variants[variant].letterSpacing, theme))
    !lineHeight && styles.push(toPropValue('line-height', variants[variant].lineHeight, theme))
    return styles.join("\n")
  }}}
  ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
`
Text.defaultProps = {
  variant: "md",
  color: "text"
}
export default Text
