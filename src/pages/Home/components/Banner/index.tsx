import {
  BannerContainer,
  BannerIcons,
  BannerInfos,
  BannerText,
  IconsWrapper,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import BannerImg from '../../../../assets/banner.png'

export function Banner() {
  return (
    <BannerContainer>
      <BannerInfos>
        <BannerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </BannerText>

        <IconsWrapper>
          <BannerIcons>
            <button>
              <ShoppingCart weight="fill" />
            </button>
            <span>Compra simples e segura</span>
          </BannerIcons>

          <BannerIcons>
            <button>
              <Package />
            </button>
            <span>Embalagem mantém o café intacto</span>
          </BannerIcons>

          <BannerIcons>
            <button>
              <Timer weight="fill" />
            </button>
            <span>Entrega rápida e rastreada</span>
          </BannerIcons>

          <BannerIcons>
            <button>
              <Coffee weight="fill" />
            </button>
            <span>O café chega fresquinho até você</span>
          </BannerIcons>
        </IconsWrapper>
      </BannerInfos>

      <img src={BannerImg} alt="" />
    </BannerContainer>
  )
}
