import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'
const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1024x580',
  title: 'Defy death',
  subTitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)
    // verificar se o title existe renderizado (.toBeInTheDocument())
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    // verificar se o subtitle existe renderezizado
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    // verificar se o image existe renderezizado
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
