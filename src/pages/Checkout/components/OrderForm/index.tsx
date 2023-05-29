import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { AddressForm } from '../AddressForm'
import {
  OrderFormContainer,
  AddressFormContainer,
  PaymentMethodContainer,
  AddressFormTitle,
  PaymentTitle,
} from './styles'
import { PaymentMethod } from '../Payment'

export function OrderForm() {
  return (
    <OrderFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressFormContainer>
        <AddressFormTitle>
          <MapPinLine size={22} />
          <p>
            Endereço de entrega
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </AddressFormTitle>

        <AddressForm />
      </AddressFormContainer>

      <PaymentMethodContainer>
        <PaymentTitle>
          <CurrencyDollar size={22} />
          <p>
            Pagamento
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
        </PaymentTitle>

        <PaymentMethod />
      </PaymentMethodContainer>
    </OrderFormContainer>
  )
}
