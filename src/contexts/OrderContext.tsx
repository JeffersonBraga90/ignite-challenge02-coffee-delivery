import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { CheckoutFormValues } from '../pages/Checkout/useCheckout'

interface OrderContextType {
  checkoutValues: CheckoutFormValues
  updateCheckoutValues: (values: CheckoutFormValues) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [checkoutValues, setCheckoutValues] = useState({} as CheckoutFormValues)

  function updateCheckoutValues(values: CheckoutFormValues) {
    setCheckoutValues(values)
  }

  return (
    <OrderContext.Provider
      value={{
        checkoutValues,
        updateCheckoutValues,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => {
  const context = useContext(OrderContext)

  if (!context) {
    throw new Error(
      'useOrderContext must be used within a <OrderContextProvider>',
    )
  }

  return context
}
