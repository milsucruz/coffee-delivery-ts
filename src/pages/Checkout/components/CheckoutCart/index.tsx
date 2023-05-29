import { useCart } from '../../../../hook/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
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
  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)

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
            <p>{formattedItemsTotal}</p>
          </CheckoutInfos>

          <CheckoutInfos>
            <p>Entrega</p>
            <p>R$ {formattedDeliveryPrice}</p>
          </CheckoutInfos>

          <CheckoutInfos>
            <span>Total</span>
            <span>R$ {formattedCartTotal}</span>
          </CheckoutInfos>

          <button type="submit" disabled={cartQuantity <= 0}>
            confirmar pedido
          </button>
        </FinalBill>
      </CheckoutCartContent>
    </CheckoutCartContainer>
  )
}
