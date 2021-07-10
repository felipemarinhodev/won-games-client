import Game, { GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'ghost-of-tsushima' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://www.denofgeek.com/wp-content/uploads/2020/07/ghost-of-tsushima-ps5-1.jpg'
    }
  }
}
