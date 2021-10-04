import { renderWithTheme } from 'utils/tests/helpers'
import items from 'components/CartList/mock'

import CartDropdown from '.'
import { screen } from '@testing-library/dom'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={items} total="$65.00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })
  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={items} total="$65.00" />)

    expect(screen.getByText('$65.00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
