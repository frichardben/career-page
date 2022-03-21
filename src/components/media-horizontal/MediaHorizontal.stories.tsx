import { Story, Meta } from '@storybook/react'
import { IMediaHorizontalProps } from '../../types'

import { MediaHorizontal } from './MediaHorizontal'

export default {
  title: 'MediaHorizontal',
  component: MediaHorizontal,
  parameters: {
    controls: {
      expanded: true
    }
  }
} as Meta

const Template: Story<IMediaHorizontalProps> = (args) => (
  <MediaHorizontal {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  imgUrl: 'https://i.pravatar.cc/400?u=richard',
  alt: 'imagem',
  title: 'Media',
  subtitle: 'Horizontal',
  description: 'Lorem ipsum'
}
