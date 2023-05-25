// import { coffees } from '../../../../data/coffees'
import { coffees } from '../../../../data/coffees'
import { Card } from '../Cards'

import { CoffeesWrapper } from './styles'

export function OurCoffes() {
  return (
    <CoffeesWrapper>
      <h2>Nossos cafés</h2>
      <div>
        {coffees.map((coffee) => {
          return <Card key={coffee.id} coffee={coffee} />
        })}
      </div>
    </CoffeesWrapper>
  )
}
