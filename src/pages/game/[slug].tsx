import Game, { GameTemplateProps } from 'templates/Game'

import galleryMock from 'components/Gallery/mock'

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
        'https://www.denofgeek.com/wp-content/uploads/2020/07/ghost-of-tsushima-ps5-1.jpg',
      gameInfo: {
        title: 'The ghost of tsushima',
        price: '59.00',
        description:
          'In the late 13th century, the Mongol Empire has laid waste to entire nations along their campaign to conquer the East. Tsushima island is all that stands between mainland Japan and a massive Mongol invasion fleet LED by the ruthless and cunning General, khotun Khan. As the island burns in the wake of the first wave of the Mongol Assault, Samurai warrior Jin sakai stands as one of the last surviving members of his clan. He is resolved do whatever it takes, at any cost, to protect his people and reclaim his home. He must set aside the traditions that have shaped him as a warrior to forge a new path, the path of the Ghost, and wage an unconventional war for the freedom of tsushima.'
      },
      gallery: galleryMock
    }
  }
}
