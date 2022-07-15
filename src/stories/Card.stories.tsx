import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card, CardGrid } from '../ui/Card'

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    img: {
      control: false,
    },
    link: {
      control: false,
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <CardGrid>
    <Card {...args} />
  </CardGrid>
)

export const Primary = Template.bind({})

Primary.args = {
  img: '/images/site/image-default.jpg',
  title: 'Example Card Title',
  link: '',
  time: new Date().toLocaleDateString(),
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere praesentium doloremque quisquam eius dolor, commodi a enim rerum debitis, officiis ad numquam laborum quibusdam. Quibusdam dolores cupiditate laborum nostrum blanditiis?',
}
