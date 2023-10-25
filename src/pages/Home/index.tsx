import { CardCoffee } from './components/CardCoffee'
import { Information } from './components/Information'

import {
  Banner,
  BannerImage,
  BannerInformation,
  HomeContainer,
  MainSection,
} from './styles'

import imgCoffeeDelivery from '../../assets/img/coffee.svg'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <BannerInformation>
          <Information />
        </BannerInformation>

        <BannerImage>
          <img
            src={imgCoffeeDelivery}
            alt="Um copo com uma imagem de outro copo com um foguete e do lado escrito coffee delivery"
          />
        </BannerImage>
      </Banner>

      <MainSection>
        <h1>Nossos cafés</h1>
        <CardCoffee />
      </MainSection>
    </HomeContainer>
  )
}
