import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: { default: 'won-dark' }
  },
  args: {
    items
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div>
    <ExploreSidebar {...args} />
  </div>
)
