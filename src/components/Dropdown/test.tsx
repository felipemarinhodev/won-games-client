import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Dropdown title={'Click here'}>Content</Dropdown>)

    // expect(container.firstChild).toMatchSnapshot()
  })
})
