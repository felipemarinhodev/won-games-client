import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  const makeSut = () => renderWithTheme(<UserDropdown username="John Doe" />)

  it('should render the username', () => {
    makeSut()
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })
  it('should render the menu', () => {
    makeSut()
    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })
})
