import styled from 'styled-components'

export const ConfirmOrderContainer = styled.div`
  margin-top: 5rem;
  padding: 2.5rem;
`

export const ConfirmOrderHeader = styled.header``

export const ConfirmOrderTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};
`

export const ConfirmOrderSubtitle = styled.p`
  margin-top: 0.25rem;
  width: 552px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  gap: 2rem;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.yellow};
  margin-top: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.813rem;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${({ theme }) => theme['base-text']};
    }
    span {
      font-weight: 700;
    }
  }
`
export const ConfirmOrderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 492px;
    height: 293px;
    flex-shrink: 0;
  }
`
