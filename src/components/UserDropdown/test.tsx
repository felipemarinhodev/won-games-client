import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
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
    userEvent.click(screen.getByText('John Doe'))
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
