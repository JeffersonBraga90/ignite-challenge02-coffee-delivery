import { ICoffee } from './types'

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addToCart(coffee: ICoffee) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: coffee,
  }
}

export function removeFromCart(coffeeId: string) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: coffeeId,
  }
}

export function changeCartItemQuantity(coffeeId: string, quantity: number) {
  return {
    type: CartActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: { id: coffeeId, quantity },
  }
}

export function clearCart() {
  return {
    type: CartActionTypes.CLEAR_CART,
  }
}
