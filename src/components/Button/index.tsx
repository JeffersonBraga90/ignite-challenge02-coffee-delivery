import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'
import { ColorType } from '../../styles/themes/colors'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: ColorType
}

export function Button({ children, color = 'purple', ...rest }: ButtonProps) {
  return (
    <ButtonContainer color={color} {...rest}>
      {children}
    </ButtonContainer>
  )
}
