import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://wwww.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://wwww.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            twitter
          </a>
          <a
            href="https://wwww.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            youtube
          </a>
          <a
            href="https://wwww.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolot sit.</span>
        <span>Lorem ipsum</span>
        <span>Lorem, ipsum dolot.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 ® All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
