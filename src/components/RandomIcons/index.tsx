import { ReactNode } from 'react'
import { RandomIconsContainer } from './styles'

interface RandomIconsProps {
  icon: ReactNode
  color: string
}

export function RandomIcons({ icon, color }: RandomIconsProps) {
  return <RandomIconsContainer color={color}>{icon}</RandomIconsContainer>
}
