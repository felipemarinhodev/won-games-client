import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import highlightMock from 'components/Highlight/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      cards: cardsMock,
      items: itemsMock,
      total: '$ 123.00'
    }
  }
}
