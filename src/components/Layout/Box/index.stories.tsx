import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box  from './';


export default {
  title: 'Layout/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
