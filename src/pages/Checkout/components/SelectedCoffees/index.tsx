import { useCoffeeContext } from '../../../../contexts/CoffeeContext'
import { formatToBRL } from '../../../Home/utils/formatToBRL'
import { CoffeeItem } from './components/CoffeeItem/coffeeItem'
import {
  ConfirmOrderContainer,
  ConfirmOrderFooter,
  ConfirmOrderHeader,
  ConfirmOrderTitle,
  Divider,
} from './styles'
import { useSelectedCoffees } from './useSelectedCoffees'

export function SelectedCoffees() {
  const { total, delivery, totalWithDelivery } = useSelectedCoffees()
  const { coffees } = useCoffeeContext()
  return (
    <>
      <ConfirmOrderHeader>
        <ConfirmOrderTitle>Cafés selecionados</ConfirmOrderTitle>
      </ConfirmOrderHeader>

      <ConfirmOrderContainer>
        <div>
          {coffees?.map((coffee, index) => (
            <div key={coffee.id}>
              <div>
                <CoffeeItem {...coffee} />
                {index !== coffees.length - 1}
                <Divider />
              </div>
            </div>
          ))}
        </div>

        <ConfirmOrderFooter>
          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>
              <strong>Total</strong>
            </p>
          </div>
          <div>
            <span>R$ {formatToBRL(total)}</span>
            <span>R$ {formatToBRL(delivery)}</span>
            <span>
              <strong>R$ {formatToBRL(totalWithDelivery)}</strong>
            </span>
          </div>
        </ConfirmOrderFooter>
        <button type="submit">Confirmar Pedido</button>
      </ConfirmOrderContainer>
    </>
  )
}
