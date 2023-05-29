import { useCart } from '../../../../hook/useCart'
import { priceFormatter } from '../../../../utils/priceFormatter'
import { CoffeeCard } from '../CoffeeCard'
import {
  CheckoutCartContainer,
  CheckoutCartContent,
  CheckoutInfos,
  FinalBill,
} from './styles'

const deliveryPrice = 3.5

export function CheckoutCart() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = deliveryPrice + cartItemsTotal

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
            <p>{priceFormatter.format(cartItemsTotal)}</p>
          </CheckoutInfos>

          <CheckoutInfos>
            <p>Entrega</p>
            <p>{priceFormatter.format(deliveryPrice)}</p>
          </CheckoutInfos>

          <CheckoutInfos>
            <span>Total</span>
            <span>{priceFormatter.format(cartTotal)}</span>
          </CheckoutInfos>

          <button type="submit" disabled={cartQuantity <= 0}>
            confirmar pedido
          </button>
        </FinalBill>
      </CheckoutCartContent>
    </CheckoutCartContainer>
  )
}
