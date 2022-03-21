import { Story, Meta } from '@storybook/react'
import { ITypographyProps } from '../../types'

import { Typography } from './Typography'

export default {
  title: 'Typography',
  component: Typography,
  parameters: {
    controls: {
      expanded: true
    }
  }
} as Meta

const Template: Story<ITypographyProps> = (args) => <Typography {...args} />

export const Primary = Template.bind({})

Primary.args = {
  variant: 'h1',
  children: 'Typography'
}
