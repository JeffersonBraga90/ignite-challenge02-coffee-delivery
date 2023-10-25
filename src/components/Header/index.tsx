import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/img/logo.svg'
import {
  CartButton,
  HeaderContainer,
  HeaderContent,
  LocationButton,
} from './styles'

import { useHeader } from './useHeader'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffees } = useCoffeeContext()
  const _navigate = useNavigate()
  const { location } = useHeader()

  const coffeesInCart = coffees?.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Imagem de um copo com um foguete subindo, e do lado escrito coffee delivery"
        />
      </NavLink>
      <HeaderContent>
        <LocationButton color="purple-light">
          <MapPin size={22} weight="fill" className="header__map-pin_icon" />
          <span>{location}</span>
        </LocationButton>

        <CartButton
          color="yellow-light"
          onClick={() => _navigate('/checkout')}
          disabled={!coffeesInCart}
          quantityInCart={coffeesInCart || 0}
        >
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
