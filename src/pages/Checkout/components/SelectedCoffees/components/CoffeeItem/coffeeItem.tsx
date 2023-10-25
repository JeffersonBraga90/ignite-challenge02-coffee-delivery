import { Trash } from 'phosphor-react'
import { AmountDisplay } from '../../../../../../components/AmountDisplay'
import { useCoffeeContext } from '../../../../../../contexts/CoffeeContext'
import { ICoffee } from '../../../../../../reducers/types'
import { formatToBRL } from '../../../../../Home/utils/formatToBRL'
import {
  ActionsContainer,
  CoffeeItemContainer,
  DescriptionContainer,
  RemoveButton,
} from './styles'

export function CoffeeItem(props: ICoffee) {
  const { handleChangeCoffeeQuantity, handleRemoveCoffeeFromCart } =
    useCoffeeContext()

  const handleDecrement = () => {
    if (props.quantity === 1) return

    handleChangeCoffeeQuantity(props.id, props.quantity - 1)
  }

  const handleIncrement = () => {
    handleChangeCoffeeQuantity(props.id, props.quantity + 1)
  }

  const handleRemove = () => {
    handleRemoveCoffeeFromCart(props.id)
  }

  return (
    <CoffeeItemContainer>
      <img src={props.image} alt={props.name} />
      <div>
        <DescriptionContainer>
          <span>{props.name}</span>
          <strong> R$ {formatToBRL(props.price * props.quantity)}</strong>
        </DescriptionContainer>
        <ActionsContainer>
          <AmountDisplay
            quantity={props.quantity}
            decrement={handleDecrement}
            increment={handleIncrement}
            style={{ height: 32 }}
          />
          <RemoveButton type="button" onClick={handleRemove}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ActionsContainer>
      </div>
    </CoffeeItemContainer>
  )
}
