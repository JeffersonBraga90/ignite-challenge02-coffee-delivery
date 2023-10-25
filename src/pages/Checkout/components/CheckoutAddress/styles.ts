import styled from 'styled-components'

export const CheckoutAddressContainer = styled.div``

export const CheckoutHeader = styled.header`
  margin-bottom: 0.938rem;
`

export const CheckoutTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const FormCheckoutContainer = styled.form`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const FormCheckoutHeader = styled.header`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;
`

export const FormCheckoutTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.125rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormCheckoutSubtitle = styled.p`
  font-size: 0.875rem;
  margin-left: 1.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const FormFieldContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;

  > div {
    display: grid;
    gap: 0.75rem;
  }

  > div:nth-child(1) {
    grid-template-columns: 12.5rem;
  }

  > div:nth-child(2) {
    grid-template-columns: auto;
  }

  > div:nth-child(3) {
    grid-template-columns: 12.5rem auto;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  > div:nth-child(4) {
    grid-template-columns: 12.5rem auto 5rem;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`
