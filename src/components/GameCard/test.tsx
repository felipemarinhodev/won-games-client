import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('Should render price is label', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('Should render a line-through in price when promotional', () => {
    const propsWithPromotional = {
      ...props,
      price: 'R$ 200,00',
      promotionalPrice: 'R$ 15,00'
    }
    renderWithTheme(<GameCard {...propsWithPromotional} />)
    expect(screen.getByText(propsWithPromotional.price)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(
      screen.getByText(propsWithPromotional.promotionalPrice)
    ).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(propsWithPromotional.promotionalPrice)).toHaveStyle(
      {
        backgroundColor: '#3CD3C1'
      }
    )
  })

  it('Should render a fulled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('Should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
