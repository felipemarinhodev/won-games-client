import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div>
    <CartIcon />
  </div>
)
export const WithItems: Story<CartIconProps> = (args) => (
  <div>
    <CartIcon {...args} />
  </div>
)

WithItems.args = {
  quantity: 3
}
