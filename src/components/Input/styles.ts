import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    font-size: 0.875rem;

    padding: 0.75rem;

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
  }

  div.optional {
    position: absolute;
    padding: 0.75rem;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    height: 42.8px;
    color: ${(props) => props.theme['base-text']};
    font-style: italic;
  }
`

export const ErroContainer = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.red};

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
