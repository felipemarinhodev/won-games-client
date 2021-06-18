import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac'],
    developer: 'Different Tales',
    releaseDate: '2020-11-21T23:00:00'
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
