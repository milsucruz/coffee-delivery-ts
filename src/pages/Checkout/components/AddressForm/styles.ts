import { styled } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
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
