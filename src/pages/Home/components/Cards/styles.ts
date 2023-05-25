import { styled } from 'styled-components'

export const CardContainer = styled.div`
  max-width: 16rem;
  padding: 1.25rem;

  margin-bottom: 4rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin: calc(0px - 2.3rem - 6px) 0 0.75rem;
  }
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 1rem;

  > span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
  }
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.125;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const CardShopping = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > p {
    color: ${(props) => props.theme['base-text']};

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 2rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const CardMenu = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    border: 1px solid red;
    padding: 0.5rem;

    width: 2.375rem;
    height: 2.375rem;

    border: none;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};

    cursor: pointer;

    transition: background 0.1s;
  }

  > button:hover {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }
`

export const CardQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    align-items: center;

    border: none;
    background: transparent;
  }

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    transition: color 0.1s;
  }

  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
