import logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderNav, LocationBtn, CartBtn } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <HeaderNav>
        <LocationBtn>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza - CE</span>
        </LocationBtn>
        <CartBtn>
          {/* {cartQuantity >= 1 && <span>{cartQuantity}</span>} */}
          <ShoppingCart size={22} weight="fill" />
        </CartBtn>
      </HeaderNav>
    </HeaderContainer>
  )
}
