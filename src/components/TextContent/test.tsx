import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent />)
  })
})
