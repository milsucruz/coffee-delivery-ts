import { Banner } from './components/Banner'
import { OurCoffes } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <OurCoffes />
    </HomeContainer>
  )
}
