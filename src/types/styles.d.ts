export type ResponsiveProp<T> = {
  base?: T,
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export type Responsive<T> = T | ResponsiveProp<T>
const keys = [ "name", "test" ] as const 

type Test = {
  [key in typeof keys[number]]: number
}

type Test<T> = T extends string ? string : number
type Test = <T extends string | number>(name: T) => T extends string ? boolean : number
type Test<T> = T extends Array< infer X> ? X : T

type Test1 = {
  name: "taro",
  value: number
}
type Test2 = {
  name: "shiro",
  value: string
}
type TestX = Test1 | Test2
type TestKey = TestX["name"]

type Test<X> = <T extends TestKey>(name: T) => X extends { name: T, value: infer U } ? U : never

type MyPick<Type, Keys extends keyof Type> = {
  [key in Keys]: Type[Keys]
}

