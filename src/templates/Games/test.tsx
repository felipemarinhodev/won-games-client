import { screen } from '@testing-library/dom'

import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesItemMock from 'components/GameCardSlider/mock'

import GamesTemplate from '.'

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ExploreSidebar" />
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<GamesTemplate />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <GamesTemplate games={gamesItemMock} filterItems={filterItemsMock} />
    )
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(8)
  })
})
