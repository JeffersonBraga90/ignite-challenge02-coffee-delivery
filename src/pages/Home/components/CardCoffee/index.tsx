import {
  CardCoffeeBody,
  CardCoffeeContainer,
  CardCoffeeContent,
  CardCoffeeDescription,
  CardCoffeeFooter,
  CardCoffeeHeader,
  CardCoffeeLabel,
  CardCoffeeLabelContent,
  CardCoffeePrice,
  CardCoffeePriceContainer,
  CardCoffeeTitle,
  CardPurshaseContainer,
} from './styles'
import { Button } from '../../../../components/Button'
import { ShoppingCartSimple } from 'phosphor-react'

import { formatToBRL } from '../../utils/formatToBRL'
import { useCoffeeContext } from '../../../../contexts/CoffeeContext'
import { useFieldArray, useForm } from 'react-hook-form'
import { coffes } from '../../utils/coffee.json'
import { AmountDisplay } from '../../../../components/AmountDisplay'

export function CardCoffee() {
  const { coffees, handleChangeCoffeeQuantity, handleAddCoffeeToCart } =
    useCoffeeContext()

  const { control } = useForm({
    defaultValues: {
      coffee: coffes.map((coffe) => ({
        ...coffe,
        quantity: 1,
        idCoffee: coffe.id,
      })),
    },
  })

  const { fields, update } = useFieldArray({
    control,
    name: 'coffee',
  })

  return (
    <CardCoffeeContainer>
      <div>
        {fields.map((coffee, index) => {
          return (
            <CardCoffeeContent key={coffee.idCoffee}>
              <CardCoffeeHeader>
                <img src={coffee.image} alt={coffee.name} />
                <CardCoffeeLabelContent>
                  {coffee.label.map((label) => (
                    <CardCoffeeLabel key={label}>{label}</CardCoffeeLabel>
                  ))}
                </CardCoffeeLabelContent>
              </CardCoffeeHeader>

              <CardCoffeeBody>
                <CardCoffeeTitle>{coffee.name}</CardCoffeeTitle>
                <CardCoffeeDescription>
                  {coffee.description}
                </CardCoffeeDescription>
              </CardCoffeeBody>

              <CardCoffeeFooter>
                <CardCoffeePriceContainer>
                  <CardCoffeePrice>
                    <pre>R$</pre>
                    <span>{formatToBRL(coffee.price)}</span>
                  </CardCoffeePrice>
                  <AmountDisplay
                    quantity={coffee.quantity}
                    decrement={() => {
                      if (coffee.quantity === 1) return

                      update(index, {
                        ...coffee,
                        quantity: coffee.quantity - 1,
                      })
                    }}
                    increment={() => {
                      update(index, {
                        ...coffee,
                        quantity: coffee.quantity + 1,
                      })
                    }}
                  />
                  <CardPurshaseContainer>
                    <Button
                      className="purchase__button"
                      type="button"
                      onClick={() => {
                        const coffeeContext = coffees?.find(
                          (coffeeContext) =>
                            coffeeContext.id === coffee.idCoffee,
                        )

                        if (coffeeContext) {
                          handleChangeCoffeeQuantity(
                            coffee.idCoffee,
                            coffee.quantity,
                          )
                        } else {
                          handleAddCoffeeToCart({
                            id: coffee.idCoffee,
                            name: coffee.name,
                            image: coffee.image,
                            price: coffee.price,
                            quantity: coffee.quantity,
                          })
                        }
                      }}
                    >
                      <ShoppingCartSimple size={22} weight="fill" />
                    </Button>
                  </CardPurshaseContainer>
                </CardCoffeePriceContainer>
              </CardCoffeeFooter>
            </CardCoffeeContent>
          )
        })}
      </div>
    </CardCoffeeContainer>
  )
}
