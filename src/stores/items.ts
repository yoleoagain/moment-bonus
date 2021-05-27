import { createServiceEffect, createServiceStore } from './index'
import { addItem, GetItems, GetItemsDoc } from 'src/codegen'
import { createEffect, createStore } from 'effector'
import client from 'src/apollo-client'

export const readItems = createEffect(client.query(GetItemsDoc)), '123');
export const itemAdded = createServiceEffect(addItem, 'New item added to game in list');
