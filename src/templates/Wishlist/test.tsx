import { screen } from '@testing-library/react'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'
import 'match-media-mock'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import Wishlist from '.'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightsMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render Wishlist correctly', () => {
    renderWithTheme(<Wishlist {...props} />)
    expect(screen.getByRole('heading', { name: /wishlist/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(8)
  })
  it('should render Empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightsMock}
      />
    )
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
