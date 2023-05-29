// import { CreditCard, Bank, Money } from 'phosphor-react'
import { CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentMethodContainer, PaymentOption } from './styles'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentOption value="credit card">
        <CreditCard size={16} />
        Cartão de crédito
      </PaymentOption>

      <PaymentOption value="debit card">
        <Bank size={16} />
        Cartão de débito
      </PaymentOption>

      <PaymentOption value="money">
        <Money size={16} />
        Dinheiro
      </PaymentOption>
    </PaymentMethodContainer>
  )
}
