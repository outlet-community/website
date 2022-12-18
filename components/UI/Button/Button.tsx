import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ChakraButton {...props}>{children}</ChakraButton>
}
