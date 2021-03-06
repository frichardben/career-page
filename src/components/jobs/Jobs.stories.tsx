import { Story, Meta } from '@storybook/react'
import { IJobsProps } from '../../types'

import { Jobs } from './Jobs'

export default {
  title: 'Jobs',
  component: Jobs,
  parameters: {
    controls: {
      expanded: true
    }
  }
} as Meta

const Template: Story<IJobsProps> = (args) => <Jobs {...args} />

export const Primary = Template.bind({})

Primary.args = {
  link: 'https://www.google.com/',
  title: 'google'
}
