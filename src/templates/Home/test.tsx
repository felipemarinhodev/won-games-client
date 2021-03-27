import { render } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home />)
  })
})
