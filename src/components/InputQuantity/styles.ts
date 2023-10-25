import styled from 'styled-components'

export const InputQuantityContainer = styled.div`
  display: flex;
  height: 38px;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`

export const QuantityInput = styled.span`
  font-family: 'Roboto' sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  width: 20px;
`

export const QuantityButton = styled.button`
  color: ${(props) => props.theme.purple};
  width: 14px;
  height: 14px;
  border: 0;
  background: transparent;
`
