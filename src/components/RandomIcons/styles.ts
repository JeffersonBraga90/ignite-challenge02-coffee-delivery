import styled from 'styled-components'

interface RandomIconsProps {
  color: string
}

export const RandomIconsContainer = styled.div<RandomIconsProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 1rem;

  background: ${(props) => props.color};
  color: ${(props) => props.theme.white};
`
