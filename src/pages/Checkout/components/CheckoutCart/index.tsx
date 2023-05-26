import { CoffeeCard } from '../CoffeeCard'
import { CheckoutCartContainer, CheckoutCartContent } from './styles'

export function CheckoutCart() {
  return (
    <CheckoutCartContainer>
      <h2>Cafés selecionados</h2>

      <CheckoutCartContent>
        <CoffeeCard />
        <CoffeeCard />
      </CheckoutCartContent>
    </CheckoutCartContainer>
  )
}
