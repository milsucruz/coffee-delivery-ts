import {
  BannerIcons,
  IconsWrapper,
  SuccessContainer,
  TextWrapper,
} from './styles'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import SuccessImg from '../../assets/Illustration.png'
import { OrderData } from '../Checkout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface OrderInfos {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as OrderInfos

  const nav = useNavigate()

  useEffect(() => {
    if (!state) {
      nav('/')
    }
  })

  if (!state) return <></>

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
              <p>
                Entrega em {state.rua}, {state.numero}
              </p>
              <span>
                {state.bairro} - {state.cidade}, {state.uf}
              </span>
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
              <span>{state.payment}</span>
            </section>
          </BannerIcons>
        </IconsWrapper>
      </TextWrapper>

      <img src={SuccessImg} alt="Entregador em uma moto com o pedido" />
    </SuccessContainer>
  )
}
