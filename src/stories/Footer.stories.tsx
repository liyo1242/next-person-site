import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FooterComp from '../layout/footer'

export default {
  title: 'Example/Layout',
  component: FooterComp,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FooterComp>

const Template: ComponentStory<typeof FooterComp> = (args) => <FooterComp {...args} />

export const Footer = Template.bind({})
Footer.args = {}
