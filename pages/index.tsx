import { Box } from '@chakra-ui/react'
import React from 'react'

import AppHead from '../utils/AppHead'

const Home: React.FC = () => {
  return (
    <>
      <AppHead />
      <Box>Test</Box>
      <button
        type="button"
        style={{
          backgroundColor: '#c73852',
          borderRadius: '12px',
          border: 'none',
        }}
        onClick={() => {
          throw new Error('Sentry Frontend Error')
        }}
      >
        Throw error
      </button>
    </>
  )
}

export default Home
