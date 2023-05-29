import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const PaymentMethodContainer = styled(RadioGroup.Root)`
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
