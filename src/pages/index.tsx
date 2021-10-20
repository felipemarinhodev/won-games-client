import { gql, useQuery } from '@apollo/client'
import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from '../components/GameCardSlider/mock'
import bannersMock from '../components/BannerSlider/mock'
import highlightMock from '../components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

// ATENÇÃO
// os métodos getStaticProps/getServerSidePros SÓ FUNCIONAM EM PAGES

// https://nextjs.org/docs/basic-features/pages
// getStaticProps(Recommended) => gerar estático em build time
// getServerSideProps(Recommended) => gerar via ssr a cada request
// getInitialProps => gerar vai ssr a cada request
export function getStaticProps() {
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
