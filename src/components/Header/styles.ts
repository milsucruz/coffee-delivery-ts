import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  background: ${(props) => props.theme.background};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border: none;
    border-radius: 6px;

    cursor: pointer;

    transition: background 0.2s;
  }
`

export const LocationBtn = styled.button`
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};

  > span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
  }

  > svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background: ${(props) => props.theme['purple-dark']};

    > span {
      color: ${(props) => props.theme['purple-light']};
      font-size: 0.875rem;
    }

    > svg {
      color: ${(props) => props.theme['purple-light']};
    }
  }
`

export const CartBtn = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  > span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(2.7rem / 2);
    right: calc(-1rem / 2);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
  }
`
