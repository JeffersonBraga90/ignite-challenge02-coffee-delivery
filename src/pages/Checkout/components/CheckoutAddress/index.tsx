import { useFormContext } from 'react-hook-form'

import {
  CheckoutAddressContainer,
  CheckoutHeader,
  CheckoutTitle,
  FormCheckoutContainer,
  FormCheckoutHeader,
  FormCheckoutSubtitle,
  FormCheckoutTitle,
  FormFieldContainer,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import Input from '../../../../components/Input'

export function CheckoutAddress() {
  const { register } = useFormContext()

  return (
    <CheckoutAddressContainer>
      <CheckoutHeader>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
      </CheckoutHeader>

      <FormCheckoutContainer>
        <FormCheckoutHeader>
          <FormCheckoutTitle>
            <MapPinLine size={22} />
            Endereço de Entrega
          </FormCheckoutTitle>
          <FormCheckoutSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </FormCheckoutSubtitle>
        </FormCheckoutHeader>
        <FormFieldContainer>
          <div>
            <Input type="text" placeholder="CEP" {...register('cep')} />
          </div>
          <div>
            <Input type="text" placeholder="Rua" {...register('street')} />
          </div>
          <div>
            <Input type="text" placeholder="Número" {...register('number')} />
            <Input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
              optional="Opcional"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <Input type="text" placeholder="Cidade" {...register('city')} />
            <Input type="text" placeholder="UF" {...register('state')} />
          </div>
        </FormFieldContainer>
      </FormCheckoutContainer>
    </CheckoutAddressContainer>
  )
}
