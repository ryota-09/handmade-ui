import { theme } from 'themes'
import type { ResponsiveProp, Responsive } from 'types/styles'

type SpaceThemeKeys = keyof typeof theme.space

// Themeの型
export type AppTheme = typeof theme

// ブレイクポイント
const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px', // 640px以上
  md: '768px', // 768px以上
  lg: '1024px', // 1024px以上
  xl: '1280px', // 1280px以上
}

export function toPropValue<T> (propKey: string, prop?: Responsive<T>, theme?: AppTheme){
  if(!prop) return undefined;
  const result = []
  if(theme && isResponsivePropType(prop)){

    for(const responsiveKey in prop){
      if(responsiveKey === "base"){
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )};`,
        )
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ){
        // メディアクエリでのスタイル
        const breakpoint = BREAKPOINTS[responsiveKey]
        const style = `${propKey}: ${toThemeValueIfNeeded(propKey, prop[responsiveKey], theme)};`
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
      }
      result.join("\n")
    }
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`
}

const SPACE_KEYS = new Set([
  'margin',
  'margin-top',
  'margin-left',
  'margin-bottom',
  'margin-right',
  'padding',
  'padding-top',
  'padding-left',
  'padding-bottom',
  'padding-right',
])

function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: AppTheme){
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(propKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value]
  }
}

function isSpaceThemeKeys (prop: any, theme: AppTheme): prop is SpaceThemeKeys{
  return Object.keys(theme.space).filter((key) => key == prop).length > 0
}

function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T>{
  return (prop && (
    prop.base != undefined ||
    prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  )
}
