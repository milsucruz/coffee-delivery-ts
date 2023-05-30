import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const OrderFormContainer = styled.div`
  max-width: 40rem;
`

export const AddressFormTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    display: flex;
    flex-direction: column;

    line-height: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border: 1px solid transparent;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const Input = styled.input`
  padding: 0.75rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:nth-child(1) {
    max-width: 12rem;
    border: 1px solid red;
  }
`

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    gap: 0.75rem;
  }

  div:nth-child(1) {
    > input:nth-child(2) {
      width: 100%;
    }
  }

  div:nth-child(2) {
    > input:nth-child(2) {
      width: 100%;
    }
    > input:nth-child(3) {
      max-width: 3.75rem;
      text-transform: uppercase;
    }
  }
`

export const PaymentMethodContainer = styled.div`
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border: 1px solid transparent;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const PaymentTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    display: flex;
    flex-direction: column;

    line-height: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentButtonsWrapper = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

export const PaymentOption = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 1rem;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }

  cursor: pointer;
`
