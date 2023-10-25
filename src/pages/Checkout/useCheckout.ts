import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useOrderContext } from '../../contexts/OrderContext'
import { useCoffeeContext } from '../../contexts/CoffeeContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaCheckout = zod.object({
  cep: zod
    .string()
    .min(8, 'O CEP deve ter 8 dígitos')
    .max(8, 'O CEP deve ter 8 dígitos'),
  street: zod.string().min(3, 'A rua deve ter no mínimo 3 caracteres'),
  number: zod.string().min(1, 'O número deve ter no mínimo 1 caracter'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'O bairro deve ter no mínimo 3 caracteres'),
  city: zod.string().min(3, 'A cidade deve ter no mínimo 3 caracteres'),
  state: zod
    .string()
    .min(2, 'O estado deve ter 2 caracteres')
    .max(2, 'O estado deve ter 2 caracteres'),
  paymentMethod: zod.string().min(1, 'Selecione uma forma de pagamento'),
})

export type CheckoutFormValues = zod.infer<typeof schemaCheckout>

export function useCheckout() {
  const _navigate = useNavigate()
  const { updateCheckoutValues } = useOrderContext()
  const { handleClearCart } = useCoffeeContext()

  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(schemaCheckout),
    defaultValues: {
      paymentMethod: '',
    },
  })

  const onSubmit = methods.handleSubmit((data) => {
    updateCheckoutValues(data)
    handleClearCart()

    _navigate('/confirm-order', { replace: true })
  })

  return {
    methods,
    onSubmit,
  }
}
