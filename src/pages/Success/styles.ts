import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.375rem;

  padding-top: 7rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid transparent;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const BannerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    border: none;
    border-radius: 50%;
  }

  &:nth-child(1) {
    button {
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme.purple};
    }
  }

  &:nth-child(2) {
    button {
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme.yellow};
    }
  }

  &:nth-child(3) {
    button {
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
