import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 414,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    const amountTotal = screen.getByText('R$ 414,00')
    expect(amountTotal).toBeInTheDocument()
    expect(amountTotal).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
