import { InputWrapper, Input, InputStyle } from './styles'

export function AddressForm() {
  return (
    <InputWrapper>
      <Input placeholder="CEP" />

      <Input placeholder="Rua" />

      <InputStyle>
        <div>
          <Input placeholder="Número" />
          <Input type="text" placeholder="Complemento" />
        </div>

        <div>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </div>
      </InputStyle>
    </InputWrapper>
  )
}
