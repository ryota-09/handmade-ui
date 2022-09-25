import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Text  from './';


export default {
  title: 'Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

export const _Text: Story = () => {
  return (
    <div>
      xs: <Text variant="xs" color="red" >テキスト</Text><br />
      sm: <Text variant="sm" color="red" >テキスト</Text><br />
      md: <Text variant="md">テキスト</Text><br />
      mdl: <Text variant="mdl">テキスト</Text><br />
      lg: <Text variant="lg">テキスト</Text><br />
      xl: <Text variant="xl">テキスト</Text><br />
      <Text variant="md" backgroundColor="secondaryLight" as="p">as=pタグ テキスト</Text>
    </div>
  )
}
