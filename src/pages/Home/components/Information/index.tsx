import { Package, Coffee, Timer, ShoppingCart } from 'phosphor-react'
import {
  Description,
  IconColorType,
  Item,
  ItemsContainer,
  Title,
} from './styles'

import { items } from '../../utils/items.json'

export function Information() {
  function createIcon(iconName: string) {
    switch (iconName) {
      case 'Package':
        return <Package weight="fill" size={16} />
      case 'Coffee':
        return <Coffee weight="fill" size={16} />
      case 'Timer':
        return <Timer weight="fill" size={16} />
      default:
        return <ShoppingCart weight="fill" size={16} />
    }
  }

  return (
    <>
      <Title>
        Encontre o café perfeito <br /> para qualquer hora do dia
      </Title>
      <Description>
        Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
        qualquer hora
      </Description>
      <ItemsContainer>
        {items.map((item) => {
          return (
            <Item key={item.id} iconColor={item.color as IconColorType}>
              {createIcon(item.icon)}
              <span>{item.text}</span>
            </Item>
          )
        })}
      </ItemsContainer>
    </>
  )
}
