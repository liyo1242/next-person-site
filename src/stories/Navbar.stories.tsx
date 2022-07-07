import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Nav from '../layout/main-nav'

export default {
  title: 'Example/Layout',
  component: Nav,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Nav>

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />

export const Navbar = Template.bind({})
Navbar.args = {}
