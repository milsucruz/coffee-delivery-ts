import {
  BannerIcons,
  IconsWrapper,
  SuccessContainer,
  TextWrapper,
} from './styles'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import SuccessImg from '../../assets/Illustration.png'

export function Success() {
  return (
    <SuccessContainer>
      <TextWrapper>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <IconsWrapper>
          <BannerIcons>
            <button>
              <MapPin />
            </button>
            <section>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <span>Farrapos - Porto Alegre, RS</span>
            </section>
          </BannerIcons>

          <BannerIcons>
            <button>
              <Timer />
            </button>
            <section>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </section>
          </BannerIcons>

          <BannerIcons>
            <button>
              <CurrencyDollar />
            </button>
            <section>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </section>
          </BannerIcons>
        </IconsWrapper>
      </TextWrapper>

      <img src={SuccessImg} alt="Entregador em uma moto com o pedido" />
    </SuccessContainer>
  )
}
