import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 5.75rem;

  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`

export const Banner = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const BannerInformation = styled.section`
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const BannerImage = styled.section`
  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`

export const MainSection = styled.section`
  margin-top: 7.75rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.125rem;
  }
`
