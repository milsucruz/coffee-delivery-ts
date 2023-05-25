import { MapPinLine } from 'phosphor-react'
import { AddressFormContainer, AddressFormHeader } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <AddressFormHeader>
        <MapPinLine size={22} />
        <p>
          Endereço de entrega
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </p>
      </AddressFormHeader>
      <p>AddressForm</p>
    </AddressFormContainer>
  )
}
