import styled, { css } from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const PaymentHeader = styled.header`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;
`

export const PaymentTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.125rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentSubtitle = styled.p`
  font-size: 0.875rem;
  margin-left: 1.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const PaymentCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 0.75rem;
  width: 100%;
`
interface PaymentButtonProps {
  selected?: boolean
}

const selectedButton = css`
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme.purple};
  border: 1px solid ${({ theme }) => theme['brand-purple']};
  transition: all 0.1s ease-in-out;
`

export const PaymentButton = styled.button<PaymentButtonProps>`
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: none;
  border-radius: 6px;
  padding: 1rem;

  color: ${({ theme }) => theme['base-text']};
  background: ${({ theme }) => theme['base-button']};
  border: 1px solid transparent;

  span {
    color: ${({ theme }) => theme['gray-700']};
  }

  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
    transition: all 0.1s ease-in-out;
  }

  ${({ selected }) => selected && selectedButton}

  &:focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
