import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem ipsum</Profile>)

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
