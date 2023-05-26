import { CheckoutCart } from './components/CheckoutCart'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <h2>Complete seu pedido</h2>

      <CheckoutCart />
    </CheckoutContainer>
  )
}
