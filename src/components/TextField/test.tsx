import { Email } from '@styled-icons/material-outlined'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('Renders with label', () => {
    renderWithTheme(<TextField label="label" labelFor="Field" id="Field" />)
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  it('Renders without label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(
      screen.getByTestId('icon').parentElement?.parentElement
    ).not.toHaveStyleRule('flex-direction', 'row-reverse')
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(
      screen.getByTestId('icon').parentElement?.parentElement
    ).toHaveStyleRule('flex-direction', 'row-reverse')
  })
})