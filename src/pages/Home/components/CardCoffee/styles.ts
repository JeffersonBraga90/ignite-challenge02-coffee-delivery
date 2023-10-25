import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 2rem;
  }
`

export const CardCoffeeContent = styled.div`
  margin-top: 3.375rem;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem;
`

export const CardCoffeeHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -1.5rem;
`

export const CardCoffeeLabelContent = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 0.25rem;
  }
`

export const CardCoffeeLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
`

export const CardCoffeeBody = styled.div`
  margin-top: -2rem;
`

export const CardCoffeeTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  margin-bottom: 0.5rem;
`

export const CardCoffeeDescription = styled.p`
  width: 216px;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const CardCoffeeFooter = styled.footer`
  margin-top: 2.063rem;
  margin-bottom: 1.25rem;
`

export const CardCoffeePriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
`
export const CardCoffeePrice = styled.section`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  pre {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const CardPurshaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .purchase__button {
    margin-left: 0.5rem;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['purple-dark']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['base-card']};
    }
  }
`
