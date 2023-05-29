import { CheckoutCart } from './components/CheckoutCart'
import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const checkoutPageFormSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
})

export type OrderData = zod.infer<typeof checkoutPageFormSchema>

type CheckoutPageFormData = OrderData

export function Checkout() {
  const checkoutPageForm = useForm<CheckoutPageFormData>({
    resolver: zodResolver(checkoutPageFormSchema),
  })

  const { handleSubmit } = checkoutPageForm

  function handleConfirmOrder(data: CheckoutPageFormData) {
    console.log(data)
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
