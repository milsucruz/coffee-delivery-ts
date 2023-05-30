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
export const FinalBill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding-top: 1.5rem;

  button {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;

    width: 100%;

    border: none;
    border-radius: 6px;

    padding: 0.75rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};

    cursor: pointer;
    transition: background 0.1s;
  }

  button:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const CheckoutInfos = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;

    padding-bottom: 1.5rem;
  }
`
