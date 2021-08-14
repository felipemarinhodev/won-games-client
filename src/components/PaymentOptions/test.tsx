import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={mockPaymentOptions} />
    )
    userEvent.click(screen.getByText(/4326/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4326/ })).toBeChecked()
    })
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions
        handlePayment={handlePayment}
        cards={mockPaymentOptions}
      />
    )
    userEvent.click(screen.getByText(/4326/))

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
