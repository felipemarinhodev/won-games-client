import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import mockPaymentOptions from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={mockPaymentOptions} />
    )

    expect(screen.getByText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
