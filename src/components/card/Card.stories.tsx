import { Story, Meta } from '@storybook/react'

import { Card, ICardProps } from './Card'

export default {
  title: 'Card',
  component: Card,
  parameters: {
    controls: {
      expanded: true
    }
  }
} as Meta

const Template: Story<ICardProps> = (args) => <Card {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'AMBIENTE DESCONTRAÍDO',
  imageUrl: 'https://i.pravatar.cc/300?u=richard',
  alt: 'pravatar',
  description: 'Vem em nós'
}
