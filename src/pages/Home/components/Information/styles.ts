import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const Description = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`

export const ItemsContainer = styled.ul`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`

const ICONS_COLOR = {
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

export type IconColorType = keyof typeof ICONS_COLOR

interface ItemStyleProps {
  iconColor: IconColorType
}

export const Item = styled.li<ItemStyleProps>`
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    background: ${(props) => props.theme[ICONS_COLOR[props.iconColor]]};
    color: ${(props) => props.theme.white};
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    margin-left: 0.75rem;
  }
`
