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
  depth: 0
  id: string //TODO: REMOVE APOLLO ID BY STRINGS PROBLEM!!!
}

