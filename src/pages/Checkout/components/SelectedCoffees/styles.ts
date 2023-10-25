import styled from 'styled-components'

export const ConfirmOrderContainer = styled.div`
  display: flex;
  width: 448px;
  padding: 2.5rem;
  flex-direction: column;
  gap: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  > div {
    height: 250px;
    overflow-y: scroll;
  }

  > button {
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: none;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    font-family: 'Roboto', sans-serif;
  }
`

export const ConfirmOrderHeader = styled.header`
  margin-bottom: 0.938rem;
`

export const ConfirmOrderTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmOrderFooter = styled.footer`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  line-height: 130%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
  }

  p + p {
    padding: 0.75rem 0;
  }

  span + span {
    font-size: 1rem;
    display: flex;
    padding: 0.75rem 0;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme['base-button']};
`
