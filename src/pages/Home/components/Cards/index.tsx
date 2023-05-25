import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  Tags,
  CardText,
  CardMenu,
  CardQuantity,
  CardShopping,
} from './styles'

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
            <button>
              <Minus />
            </button>
            <p>01</p>
            <button>
              <Plus />
            </button>
          </CardQuantity>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardMenu>
      </CardShopping>
    </CardContainer>
  )
}
