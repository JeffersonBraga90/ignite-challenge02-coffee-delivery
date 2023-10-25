import styled from 'styled-components'

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
  border-radius: 4px;
  height: 2.375rem;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme['base-button']};

  > button {
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme['purple-dark']};
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      box-shadow: none;
    }
  }

  > span {
    width: 1.25rem;
  }
`
