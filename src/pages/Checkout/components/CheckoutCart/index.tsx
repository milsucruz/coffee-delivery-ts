import { useCart } from '../../../../hook/useCart'
import { CoffeeCard } from '../CoffeeCard'
import {
  CheckoutCartContainer,
  CheckoutCartContent,
  CheckoutInfos,
  FinalBill,
} from './styles'

export function CheckoutCart() {
  const { cartItems } = useCart()

  return (
    <CheckoutCartContainer>
      <h2>Cafés selecionados</h2>

      <CheckoutCartContent>
        {cartItems.map((item) => {
          return <CoffeeCard key={item.id} coffee={item} />
        })}

        <FinalBill>
          <CheckoutInfos>
            <p>Total de itens</p>
            <p>01</p>
          </CheckoutInfos>

          <CheckoutInfos>
            <p>Entrega</p>
            <p>R$ 20,20</p>
          </CheckoutInfos>

          <CheckoutInfos>
            <span>Total</span>
            <span>R$ 20,20</span>
          </CheckoutInfos>

          <button type="submit">confirmar pedido</button>
        </FinalBill>
      </CheckoutCartContent>
    </CheckoutCartContainer>
  )
}
