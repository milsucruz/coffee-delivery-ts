import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  Tags,
  CardText,
  CardMenu,
  CardQuantity,
  CardShopping,
} from './styles'

import { useCart } from '../../../../hook/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function Card({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    setQuantity((state) => state - 1)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>
        })}
      </Tags>

      <CardText>
        <h1>{coffee.name}</h1>
        <p>{coffee.description}</p>
      </CardText>

      <CardShopping>
        <p>
          R$ <span>9,90</span>
        </p>
        <CardMenu>
          <CardQuantity>
            <button disabled={quantity <= 1} onClick={handleRemoveQuantity}>
              <Minus />
            </button>
            <p>{quantity}</p>
            <button onClick={handleAddQuantity}>
              <Plus />
            </button>
          </CardQuantity>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardMenu>
      </CardShopping>
    </CardContainer>
  )
}
