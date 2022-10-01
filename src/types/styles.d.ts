export type ResponsiveProp<T> = {
  base?: T,
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */ 
type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start"

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start"

type ContentDistoribution = "space-around" | "space-between" | "space-evenly" | "stretch"

type CSSPropatyGlobals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset"

export type CSSPropatyAlignItems = CSSPropatyGlobals | SelfPosition | "baseline" | "stretch"

export type CSSPropertyAlignContent = CSSPropatyGlobals | ContentDistoribution | "center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "normal"

export type CSSPropertyJustifyContent = CSSPropatyGlobals | ContentDistoribution | ContentPosition | "left" | "normal" | "right" 

export type CSSPropertyFlexWrap = CSSPropatyGlobals | "nowrap" | "wrap" | "wrap-reverse"

export type CSSPropertyFlexDirection = CSSPropatyGlobals | "column" | "column-reverse" | "row" | "row-reverse"

export type CSSPropertyJustifySelf = CSSPropatyGlobals | SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch"

export type CSSPropertyAlignSelf = CSSPropatyGlobals | SelfPosition | "auto" | "baseline" | "normal" | "stretch"

// const keys = [ "name", "test" ] as const 

// type Test = {
//   [key in typeof keys[number]]: number
// }

// type Test<T> = T extends string ? string : number
// type Test = <T extends string | number>(name: T) => T extends string ? boolean : number
// type Test<T> = T extends Array< infer X> ? X : T

// type Test1 = {
//   name: "taro",
//   value: number
// }
// type Test2 = {
//   name: "shiro",
//   value: string
// }
// type TestX = Test1 | Test2
// type TestKey = TestX["name"]

// type Test<X> = <T extends TestKey>(name: T) => X extends { name: T, value: infer U } ? U : never

// type MyPick<Type, Keys extends keyof Type> = {
//   [key in Keys]: Type[Keys]
// }

// type Join<T, U > = T extends [infer A, ...infer B] ? `${A}${U}${Join<B, U>}`: T
// const T = Join<["foo", "bar"], "1">

// type StrNum = string | number
// type Join<T, U extends StrNum> = T extends [infer A extends StrNum, ...infer B extends StrNum[]] ? `${A}${U}${Join<B, U>}`: T
// const S = Join<["foo", "bar"], ":">
