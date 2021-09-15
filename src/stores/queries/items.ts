//TODO: find how generate base item from type or create own fabric
//TODO: find how generate type from gql fragmet as part of whole item

import { GetItemsDoc, ItemListFieldsFragment } from 'src/codegen'
import { writable, get } from 'svelte/store'
import { activeGroupID } from './groups'

type ItemsWhere = {
    name_contains: string
    item_group: { id: string }
} | null

export const search = writable('')
export const editItemStore = writable<ItemListFieldsFragment | null>(null)

//?? How to configure "where" condition and set relay to gql types?
export const where = writable<any>({
    name_contains: get(search)
    /*
    item_group: {
        id: get(activeGroupID)
    }
    */
})

search.subscribe(v => { where.set({...get(where), name_contains: v }) })
activeGroupID.subscribe(v => {
    let newWhere = {...get(where)}
    if (v){
        newWhere.item_group = { id: Number(v) }
    } else {
        delete newWhere.item_group
    }
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