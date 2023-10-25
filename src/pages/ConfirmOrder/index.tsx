import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import ImageDelivery from '../../assets/img/delivery.svg'
import {
  ConfirmOrderContainer,
  ConfirmOrderContent,
  ConfirmOrderHeader,
  ConfirmOrderSubtitle,
  ConfirmOrderTitle,
  ConfirmOrderWrapper,
} from './styles'
import { RandomIcons } from '../../components/RandomIcons'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useOrderContext } from '../../contexts/OrderContext'
import { useEffect, useMemo } from 'react'

export function ConfirmOrder() {
  const _navigate = useNavigate()
  const theme = useTheme()
  const { checkoutValues, updateCheckoutValues } = useOrderContext()

  useEffect(() => {
    if (Object.keys(checkoutValues).length === 0) {
      _navigate('/')
    }
  }, [_navigate, checkoutValues, updateCheckoutValues])

  const paymentMethod = useMemo(() => {
    switch (checkoutValues.paymentMethod) {
      case '0':
        return 'Cartão de Crédito'
      case '1':
        return 'Cartão de Débito'
      case '2':
        return 'Dinheiro'
    }
  }, [checkoutValues])

  return (
    <ConfirmOrderContainer>
      <ConfirmOrderHeader>
        <ConfirmOrderTitle>Uhu! Pedido confirmado</ConfirmOrderTitle>
        <ConfirmOrderSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </ConfirmOrderSubtitle>
      </ConfirmOrderHeader>
      <ConfirmOrderContent>
        <ConfirmOrderWrapper>
          <div>
            <RandomIcons
              color={theme.purple}
              icon={<MapPin size={16} weight="fill" />}
            />

            <p>
              Entrega em{' '}
              <span>
                {checkoutValues.street}, {checkoutValues.number}
              </span>
              <br /> {checkoutValues.neighborhood} - {checkoutValues.city},{' '}
              {checkoutValues.state}
            </p>
          </div>

          <div>
            <RandomIcons
              color={theme.yellow}
              icon={<Timer size={16} weight="fill" />}
            />

            <p>
              Previsão de entrega
              <br /> <span>20 min - 30 min</span>
            </p>
          </div>

          <div>
            <RandomIcons
              color={theme['yellow-dark']}
              icon={<CurrencyDollar size={16} />}
            />

            <p>
              Pagamento na entrega <br /> <span>{paymentMethod}</span>
            </p>
          </div>
        </ConfirmOrderWrapper>

        <div>
          <img
            src={ImageDelivery}
            alt="Imagem de um homem em cima de uma moto andando para fazer entrega"
          />
        </div>
      </ConfirmOrderContent>
    </ConfirmOrderContainer>
  )
}
