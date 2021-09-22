import { ItemGroups } from 'src/codegen'
import { writable, get } from 'svelte/store'

export const activeGroupID = writable<number>(0)