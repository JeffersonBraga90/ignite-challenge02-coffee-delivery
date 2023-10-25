import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  > button {
    all: unset;
    cursor: pointer;
  }
`
interface CartButtonProps {
  quantityInCart: number
}

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  .header__map-pin_icon {
    color: ${(props) => props.theme.purple};
  }
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const CartButton = styled.button<CartButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  cursor: pointer;

  &:before {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    visibility: ${({ quantityInCart }) =>
      quantityInCart > 0 ? 'visible' : 'hidden'};
    content: '${({ quantityInCart }) => quantityInCart}';
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: 0.75rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};

    text-align: center;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
