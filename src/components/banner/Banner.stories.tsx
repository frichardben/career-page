import { Story, Meta } from '@storybook/react'

import { Banner, IBannerProps } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    controls: {
      expanded: true
    }
  }
} as Meta

const Template: Story<IBannerProps> = (args) => <Banner {...args} />

export const Primary = Template.bind({})

Primary.args = {
  img: 'https://i.pravatar.cc/300?u=richard',
  title: 'AMBIENTE DESCONTRAÍDO',
  alt: 'pravatar'
}
