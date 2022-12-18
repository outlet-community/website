import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import React from 'react'

import { Button } from '../../UI/Button/Button.theme'
import Navigation from '../Navigation/Navigation'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
  components: {
    Button,
  },
  config: {
    cssVarPrefix: 'outlet',
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
})

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC = (props: LayoutProps) => {
  const { children } = props
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navigation />
        {children}
      </ChakraProvider>
    </>
  )
}

export default Layout
