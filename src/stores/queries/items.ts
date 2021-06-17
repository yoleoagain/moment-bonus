//TODO: find how generate base item from type or create own fabric
//TODO: find how generate type from gql fragmet as part of whole item

import { GetItemsDoc, Items } from 'src/codegen'
import { writable } from 'svelte/store'

export const fetchItems = (search: string) => { return [{ query: GetItemsDoc, variables: { sort: 'created_at:DESC', search } }] }

export const editItemStore = writable<Items | null>(null)

export const baseItem = {
    id: '',
    name: '',
    description: '',
    updated_at: new Date(),
    created_at: new Date(),
}