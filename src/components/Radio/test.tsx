import { screen, waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import Radio from '.'

describe('<Radio />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Radio label="radio label" labelFor="radio" value="anyValue" />
    )

    const label = screen.getByText(/radio label/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with label (black)', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />)
    const label = screen.getByText(/radio/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })
  it('should render without label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByTestId('label-radio')).not.toBeInTheDocument()
  })
  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })
  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="radio" />)
    const radio = screen.getByLabelText(/radio/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
