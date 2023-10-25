import styled from 'styled-components'
import { ColorType } from '../../styles/themes/colors'

interface ButtonContainerStyleProps {
  color: ColorType
}

export const ButtonContainer = styled.button<ButtonContainerStyleProps>`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.color};
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;
`
