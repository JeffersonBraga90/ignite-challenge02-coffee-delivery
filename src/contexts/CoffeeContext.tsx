import { PropsWithChildren, createContext, useContext, useReducer } from 'react'
import { ICoffee } from '../reducers/types'
import { cartReducer } from '../reducers/reducer'
import {
  addToCart,
  changeCartItemQuantity,
  clearCart,
  removeFromCart,
} from '../reducers/actions'

interface CoffeeContextType {
  coffees?: ICoffee[]
  handleAddCoffeeToCart: (coffee: ICoffee) => void
  handleRemoveCoffeeFromCart: (coffeeId: string) => void
  handleChangeCoffeeQuantity: (coffeeId: string, quantity: number) => void
  handleClearCart: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export const CoffeeContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  })

  const { coffees } = cartState

  function handleAddCoffeeToCart(coffee: ICoffee) {
    dispatch(addToCart(coffee))
  }

  function handleRemoveCoffeeFromCart(coffeeId: string) {
    dispatch(removeFromCart(coffeeId))
  }

  function handleChangeCoffeeQuantity(coffeeId: string, quantity: number) {
    dispatch(changeCartItemQuantity(coffeeId, quantity))
  }

  function handleClearCart() {
    dispatch(clearCart())
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        handleAddCoffeeToCart,
        handleChangeCoffeeQuantity,
        handleRemoveCoffeeFromCart,
        handleClearCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => {
  const _context = useContext(CoffeeContext)

  if (!_context) {
    throw new Error(
      'useCoffeeContext must be used within a <CoffeeContextProvider />',
    )
  }

  return _context
}
