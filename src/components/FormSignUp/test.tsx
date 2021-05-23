import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import FormSignUp from '.'

describe('<FormSignUp />', () => {
  const makeSut = () => {
    const { container } = renderWithTheme(<FormSignUp />)
    return { container }
  }
  it('should render the form', () => {
    const { container } = makeSut()
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render text and link to Sign In', () => {
    makeSut()
    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument()
  })
})
