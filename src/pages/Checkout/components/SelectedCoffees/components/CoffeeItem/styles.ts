import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  > img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  strong {
    color: ${({ theme }) => theme['base-text']};
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme.purple};

  span {
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`
