import {
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeQuantityMenu,
  Infos,
  Menu,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'
import { priceFormatter } from '../../../../utils/priceFormatter'
import { useCart } from '../../../../hook/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = priceFormatter.format(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
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
            <button onClick={handleRemoveItem}>
              <Trash size={16} /> Remover
            </button>
          </Menu>
        </Infos>
      </CoffeeCardContent>
      <span>{formattedPrice}</span>
    </CoffeeCardContainer>
  )
}
