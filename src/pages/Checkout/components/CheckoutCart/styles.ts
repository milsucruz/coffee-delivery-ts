import styled from 'styled-components'

export const CheckoutCartContainer = styled.div``
export const CheckoutCartContent = styled.div`
  padding: 1rem 2.1rem 2.5rem;
  // 1 2.5 2.5

  border: 1px solid transparent;
  border-radius: 6px;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;

  background-color: ${(props) => props.theme['base-card']};
`
