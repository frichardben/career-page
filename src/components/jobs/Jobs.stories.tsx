import { Story, Meta } from '@storybook/react'
import { hrefTo, linkTo } from '@storybook/addon-links'
import { action } from '@storybook/addon-actions'

import { IJobsProps, Jobs } from './Jobs'

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
