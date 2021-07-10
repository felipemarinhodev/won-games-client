import Game, { GameTemplateProps } from 'templates/Game'

import galleryMock from 'components/Gallery/mock'
import detailMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'

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
  const descriptionHTML = `
     <img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
     * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
     <hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
     <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
     Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
     <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
     Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
     <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
     Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


     <p class="description__copyrights">
     CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
     CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
     respective owners.
   </p>`
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
      gallery: galleryMock,
      description: descriptionHTML,
      details: detailMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightsMock,
      recommendGames: gamesMock
    }
  }
}
