//TODO: Find how generate base item from type or create own fabric.
//TODO: How to configure "where" condition and set relay to gql types from codegen? 

import { GetItemsDoc, ItemListFieldsFragment } from 'src/codegen'
import { writable, get } from 'svelte/store'
import { activeGroupID } from './groups'

type ItemsWhere = {
    name_contains: string
    item_group?: { id: number }
} | null

export const search = writable('')
export const editItemStore = writable<ItemListFieldsFragment | null>(null)
export const where = writable<ItemsWhere>({ name_contains: get(search) })

search.subscribe(v => { where.set({...get(where), name_contains: v }) })
activeGroupID.subscribe(v => {
    let newWhere = {...get(where)}

    v ? newWhere.item_group = { id: Number(v) } : delete newWhere.item_group

    where.set(newWhere) 
})


export const fetchItems = [{ 
    query: GetItemsDoc, 
    variables: { 
        sort: 'created_at:DESC', 
        where: get(where)
    }}]

export const baseItem: ItemListFieldsFragment = {
    id: '',
    name: '',
    description: '',
}