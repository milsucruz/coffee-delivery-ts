/* eslint-disable prettier/prettier */
import { styled } from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 3.5rem;
`

export const BannerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`
export const BannerText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.875rem;
    margin-bottom: 1rem;

    font-family: 'Baloo 2', cursive;
  }

  p {
    font-size: 1.25rem;
  }
`

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;

  gap: 1.25rem;
`

export const BannerIcons = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};

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
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }

  &:nth-child(2) {
    button {
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme['base-text']};
    }
  }

  &:nth-child(3) {
    button {
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme.yellow};
    }
  }

  &:nth-child(4) {
    button {
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme.purple};
    }
  }
`
