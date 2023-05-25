import { styled } from 'styled-components'

export const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  border: 1px solid transparent;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`
