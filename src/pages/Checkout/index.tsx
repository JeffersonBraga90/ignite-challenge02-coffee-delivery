import { CheckoutAddress } from './components/CheckoutAddress'
import { Payment } from './components/Payment'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { useCoffeeContext } from '../../contexts/CoffeeContext'
import { useCheckout } from './useCheckout'
import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'

export function Checkout() {
  const _navigate = useNavigate()
  const { coffees } = useCoffeeContext()
  const { methods, onSubmit } = useCheckout()

  useEffect(() => {
    if (!coffees?.length) {
      _navigate('/')
    }
  }, [_navigate, coffees?.length])

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CheckoutContainer>
          <div>
            <CheckoutAddress />
            <Payment />
          </div>

          <div>
            <SelectedCoffees />
          </div>
        </CheckoutContainer>
      </form>
    </FormProvider>
  )
}
