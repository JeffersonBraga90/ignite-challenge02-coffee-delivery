import { Minus, Plus } from 'phosphor-react'
import { InputQuantityContainer, QuantityButton, QuantityInput } from './styles'

interface InputQuantityProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

type OperationType = 'addItem' | 'removeItem'

export function InputQuantity({
  quantity,
  onQuantityChange,
}: InputQuantityProps) {
  function handleQuantity(type: OperationType) {
    if (type === 'removeItem') {
      if (quantity > 1) {
        onQuantityChange(quantity - 1)
      }

      return
    }

    onQuantityChange(quantity + 1)
  }
  return (
    <InputQuantityContainer>
      <QuantityButton
        type="button"
        onClick={() => handleQuantity('removeItem')}
      >
        <Minus size={14} weight="bold" />
      </QuantityButton>
      <QuantityInput>{quantity}</QuantityInput>
      <QuantityButton type="button" onClick={() => handleQuantity('addItem')}>
        <Plus size={14} weight="bold" />
      </QuantityButton>
    </InputQuantityContainer>
  )
}
