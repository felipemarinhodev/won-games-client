import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Profile>
        <h1>Profile</h1>
      </Profile>
    )
  })
})
