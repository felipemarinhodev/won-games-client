import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import gamesItemMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      games: gamesItemMock,
      filterItems: filterItemsMock
    }
  }
}
