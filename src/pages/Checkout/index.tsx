import { CheckoutCart } from './components/CheckoutCart'
import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderForm />

      <CheckoutCart />
    </CheckoutContainer>
  )
}
