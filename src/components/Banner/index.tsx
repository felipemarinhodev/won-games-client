import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLink: string
  buttonLabel: string
}

const Banner = ({
  img,
  title,
  subTitle,
  buttonLink,
  buttonLabel
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
