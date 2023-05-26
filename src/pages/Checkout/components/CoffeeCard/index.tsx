import {
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeQuantityMenu,
  Infos,
  Menu,
} from './styles'

import cafe from '../../../../../public/coffees/americano.png'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <img src={cafe} alt="" />
        <Infos>
          <p>nome</p>
          <Menu>
            <CoffeeQuantityMenu>
              <button>
                <Minus />
              </button>
              <p>01</p>
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
