//TODO: find how generate base item from type or create own fabric
//TODO: find how generate type from gql fragmet as part of whole item

import { GetItemsDoc, Items } from 'src/codegen'
import { writable, get } from 'svelte/store'

export const search = writable('')
export const editItemStore = writable<Items | null>(null)

export const fetchItems = [{ query: GetItemsDoc, variables: { sort: 'created_at:DESC', search: get(search) } }]
export const baseItem = {
    id: '',
    name: '',
    description: '',
    updated_at: new Date(),
    created_at: new Date(),
}