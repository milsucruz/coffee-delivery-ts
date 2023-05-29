import {
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeQuantityMenu,
  Infos,
  Menu,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hook/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity } = useCart()

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <Infos>
          <p>{coffee.name}</p>
          <Menu>
            <CoffeeQuantityMenu>
              <button disabled={coffee.quantity <= 0} onClick={handleDecrease}>
                <Minus />
              </button>
              <p>{coffee.quantity}</p>
              <button onClick={handleIncrease}>
                <Plus />
              </button>
            </CoffeeQuantityMenu>
            <button>
              <Trash size={16} /> Remover
            </button>
          </Menu>
        </Infos>
      </CoffeeCardContent>
      <span>R$ {formattedPrice}</span>
    </CoffeeCardContainer>
  )
}
