import { AddressForm } from './components/AddressForm'
import { CheckoutCart } from './components/CheckoutCart'
import { AddressWrapper, CartWrapper, CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressWrapper>
        <h2>Complete seu pedido</h2>
        <AddressForm />
      </AddressWrapper>

      <CartWrapper>
        <h2>Cafés selecionados</h2>
        <CheckoutCart />
      </CartWrapper>
    </CheckoutContainer>
  )
}
