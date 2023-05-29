import {
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeQuantityMenu,
  Infos,
  Menu,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCartCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <Infos>
          <p>{coffee.name}</p>
          <Menu>
            <CoffeeQuantityMenu>
              <button>
                <Minus />
              </button>
              <p>{coffee.quantity}</p>
              <button>
                <Plus />
              </button>
            </CoffeeQuantityMenu>
            <button>
              <Trash size={16} /> Remover
            </button>
          </Menu>
        </Infos>
      </CoffeeCardContent>
      <span>R$ 9,90</span>
    </CoffeeCardContainer>
  )
}
