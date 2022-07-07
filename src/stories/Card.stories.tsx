import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from '../ui/Card'

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})

Primary.args = {
  img: '/images/site/image-default.jpg',
  title: 'Example Card Title',
  link: '',
  time: new Date().toLocaleDateString(),
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere praesentium doloremque quisquam eius dolor, commodi a enim rerum debitis, officiis ad numquam laborum quibusdam. Quibusdam dolores cupiditate laborum nostrum blanditiis?',
}
