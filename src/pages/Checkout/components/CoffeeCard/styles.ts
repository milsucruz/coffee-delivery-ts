import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e6e5e5;

  span {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
    flex: 1;
  }
`

export const CoffeeCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    width: 4rem;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border: none;
    border-radius: 6px;
    padding: 0.5rem;

    background: ${(props) => props.theme['base-button']};

    text-transform: uppercase;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    cursor: pointer;

    transition: background 0.1s;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  > button:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const CoffeeQuantityMenu = styled.div`
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
    background: transparent;
    border: none;
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
