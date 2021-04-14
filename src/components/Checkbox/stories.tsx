import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        isChecked
        label="Action"
        labelFor="action"
        name="category"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        label="Adventure"
        labelFor="adventure"
        name="category"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        label="Strategy"
        labelFor="strategy"
        name="category"
      />
    </div>
  </>
)
