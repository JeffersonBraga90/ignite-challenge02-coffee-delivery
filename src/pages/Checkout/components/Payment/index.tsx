import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
  Warning,
} from 'phosphor-react'
import {
  PaymentButton,
  PaymentCardContainer,
  PaymentContainer,
  PaymentHeader,
  PaymentSubtitle,
  PaymentTitle,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormValues } from '../../useCheckout'
import { useTheme } from 'styled-components'
import { ErroContainer } from '../../../../components/Input/styles'

export function Payment() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CheckoutFormValues>()
  const theme = useTheme()

  const errorMessage = errors.paymentMethod?.message as string

  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>
          {' '}
          <CurrencyDollar size={22} color={theme.purple} />
          Pagamento
        </PaymentTitle>
        <PaymentSubtitle>
          O pagamento é feito na entrega. Escolha a forma que desejar pagar{' '}
        </PaymentSubtitle>
      </PaymentHeader>

      <PaymentCardContainer>
        <PaymentButton
          type="button"
          selected={watch().paymentMethod === '0'}
          onClick={() => setValue('paymentMethod', '0')}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentButton>
        <PaymentButton
          type="button"
          selected={watch().paymentMethod === '1'}
          onClick={() => setValue('paymentMethod', '1')}
        >
          <Bank size={16} />
          Cartão de débito
        </PaymentButton>
        <PaymentButton
          type="button"
          selected={watch().paymentMethod === '2'}
          onClick={() => setValue('paymentMethod', '2')}
        >
          <Money size={16} />
          Dinheiro
        </PaymentButton>
      </PaymentCardContainer>
      {errors.paymentMethod && (
        <ErroContainer>
          <Warning size={18} />
          <p title={errorMessage}>{errorMessage}</p>
        </ErroContainer>
      )}
    </PaymentContainer>
  )
}
