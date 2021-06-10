import { screen } from '@testing-library/dom'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import Showcase from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  title: 'Most Popular',
  highlightProps: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render the Showcase', () => {
    renderWithTheme(<Showcase {...props} />)

    // Heading
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    //GameCardSlider
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    //GameCardSlider
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase games={props.games} highlightProps={props.highlightProps} />
    )

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlightProps={props.highlightProps} />
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
