import { GetItemsDoc } from 'src/codegen'

export const fetchItems = (search: string) => { return [{ query: GetItemsDoc, variables: { sort: 'created_at:DESC', search } }] }