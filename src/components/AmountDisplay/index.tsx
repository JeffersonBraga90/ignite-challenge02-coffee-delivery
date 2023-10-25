import { Minus, Plus } from 'phosphor-react'
import { CSSProperties } from 'react'
import { AmountContainer } from './styles'

interface AmountDisplayProps {
  quantity: number
  decrement: () => void
  increment: () => void
  style?: CSSProperties
}

export function AmountDisplay({
  quantity,
  decrement,
  increment,
  style,
}: AmountDisplayProps) {
  return (
    <AmountContainer style={style}>
      <button type="button" onClick={decrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={increment}>
        <Plus size={14} weight="bold" />
      </button>
    </AmountContainer>
  )
}
