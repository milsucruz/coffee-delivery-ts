import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderNav, LocationBtn, CartBtn } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hook/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <HeaderNav>
        <LocationBtn>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza - CE</span>
        </LocationBtn>

        <NavLink to="/checkout">
          <CartBtn>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={22} weight="fill" />
          </CartBtn>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
