import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import Box  from './';


export default {
  title: 'Layout/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <div>テスト<Box {...args}>テスト</Box></div>;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Box',
};
export const _Box: Story = () => {
  return (
    <div>
      テスト
      <Box marginTop={{base: 2, sm: 3}}>
        テスト
      </Box>
      <Box marginTop={{base: 4, sm: 3}}>
        テスト2
      </Box>
    </div>
  )
}
