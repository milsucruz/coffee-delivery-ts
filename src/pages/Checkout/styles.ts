import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  padding-top: 4.5rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};

    padding-bottom: 0.938rem;
  }
`
export const AddressWrapper = styled.div``
export const CartWrapper = styled.div``
