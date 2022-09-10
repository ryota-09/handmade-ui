import { addDecorator } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import * as NextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
