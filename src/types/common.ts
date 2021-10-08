export interface StringHashMap {
  [key: string]: string
}
export interface NumberHashMap {
  [key: string]: number
}
export interface Tree<T>{
  children: null | Tree<T>[]
  data: T
  parent: null | T
  depth: number
  id: number
}

