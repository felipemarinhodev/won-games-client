import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'

describe('<OrdersList />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<OrdersList />)
  })
})
