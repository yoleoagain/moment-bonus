export interface StringHashMap {
  [key: string]: string
}

export interface NumberHashMap {
  [key: string]: number
}

export interface Tree<T>{
  children: null | T[]
  data: T
  parent: null | T
  depth: 0
  id: number
}

