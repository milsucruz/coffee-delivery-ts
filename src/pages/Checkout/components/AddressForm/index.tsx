import { useFormContext } from 'react-hook-form'
import { InputWrapper, Input, InputStyle } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <InputWrapper>
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
  )
}
