import { produce } from 'immer'
import { CartActionTypes } from './actions'
import { CartState } from './types'

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const coffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffee) {
          coffee.quantity++
        } else {
          draft.coffees.push(action.payload)
        }
      })
    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffees.findIndex(
          (coffee) => coffee.id === action.payload,
        )
        if (coffeeIndex >= 0) {
          draft.coffees.splice(coffeeIndex, 1)
        }
      })
    case CartActionTypes.CHANGE_CART_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const coffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffee) {
          coffee.quantity = action.payload.quantity
        }
      })
    case CartActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.coffees = []
      })
    default:
      return state
  }
}
