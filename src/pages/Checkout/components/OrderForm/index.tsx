import { Controller, useFormContext } from 'react-hook-form'
import {
  InputWrapper,
  Input,
  InputStyle,
  OrderFormContainer,
  PaymentMethodContainer,
  PaymentButtonsWrapper,
  PaymentOption,
  PaymentTitle,
  AddressFormTitle,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

export function OrderForm() {
  const { register, control } = useFormContext()

  return (
    <OrderFormContainer>
      <h2>Complete seu pedido</h2>
      <InputWrapper>
        <AddressFormTitle>
          <MapPinLine size={22} />
          <p>
            Endereço de entrega
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </AddressFormTitle>

        <Input placeholder="CEP" {...register('cep')} />

        <Input placeholder="Rua" {...register('rua')} />

        <InputStyle>
          <div>
            <Input placeholder="Número" {...register('numero')} />
            <Input
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
          </div>

          <div>
            <Input type="text" placeholder="Bairro" {...register('bairro')} />
            <Input type="text" placeholder="Cidade" {...register('cidade')} />
            <Input type="text" placeholder="UF" {...register('uf')} />
          </div>
        </InputStyle>
      </InputWrapper>

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

        <Controller
          control={control}
          name="payment"
          render={({ field }) => {
            return (
              <PaymentButtonsWrapper
                onValueChange={field.onChange}
                value={field.value}
              >
                <PaymentOption value="credit">
                  <CreditCard size={16} />
                  Cartão de crédito
                </PaymentOption>

                <PaymentOption value="debit">
                  <Bank size={16} />
                  Cartão de débito
                </PaymentOption>

                <PaymentOption value="money">
                  <Money size={16} />
                  Dinheiro
                </PaymentOption>
              </PaymentButtonsWrapper>
            )
          }}
        />
      </PaymentMethodContainer>
    </OrderFormContainer>
  )
}
