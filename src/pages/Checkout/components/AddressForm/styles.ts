import { styled } from 'styled-components'

export const AddressFormContainer = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`
export const AddressFormHeader = styled.div`
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
