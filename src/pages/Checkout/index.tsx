import { CheckoutCart } from './components/CheckoutCart'
import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const checkoutPageFormSchema = zod.object({
  cep: zod.string().min(1, 'Informe um cep válido'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o número da residência'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a Unidade Federativa'),
  payment: zod.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro']),
})

export type OrderData = zod.infer<typeof checkoutPageFormSchema>

type CheckoutPageFormData = OrderData

export function Checkout() {
  const checkoutPageForm = useForm<CheckoutPageFormData>({
    resolver: zodResolver(checkoutPageFormSchema),
  })

  const { handleSubmit } = checkoutPageForm

  const nav = useNavigate()

  function handleConfirmOrder(data: CheckoutPageFormData) {
    nav('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...checkoutPageForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderForm />

        <CheckoutCart />
      </CheckoutContainer>
    </FormProvider>
  )
}
