import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
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

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="Primeiro"
        labelFor="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Segundo"
        labelFor="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Terceiro"
        labelFor="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </>
)
