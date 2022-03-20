import { Story, Meta } from '@storybook/react'

import { Divider, IDividerProps } from './Divider'

export default {
  title: 'Divider',
  component: Divider,
  parameters: {
    controls: {
      expanded: true
    }
  }
} as Meta

export const Template: Story<IDividerProps> = (args) => <Divider {...args} />
