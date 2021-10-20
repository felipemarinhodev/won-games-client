import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO
// os métodos getStaticProps/getServerSidePros SÓ FUNCIONAM EM PAGES

// https://nextjs.org/docs/basic-features/pages
// getStaticProps(Recommended) => gerar estático em build time
// getServerSideProps(Recommended) => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar vai ssr a cada request (vai para o client, no primeiro request faz no server side, após faz hydrate, no client side )
export async function getStaticProps() {
  // faz lógica
  // pode buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingGames: gamesMock,
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock
    }
  }
}
