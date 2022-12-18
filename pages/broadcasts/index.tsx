import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import { Button } from '../../components/UI/Button'
import type { BroadcastAttributes } from '../../interfaces/Broadcast'
import { fetchAPI } from '../../lib/api'
import AppHead from '../../utils/AppHead'

const Broadcasts: React.FC<BroadcastAttributes> = ({ broadcasts }) => {
  return (
    <>
      <AppHead title="Broadcasts" />
      <Button>OUTLET DELIVERY</Button>
      {broadcasts.data.map((broadcast, i) => {
        return (
          <Box key={i} borderRadius={50} borderWidth={2} borderColor="black">
            <Heading>{broadcast.attributes.createdAt}</Heading>
            <Text>{broadcast.attributes.description}</Text>
          </Box>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [broadcastsRes] = await Promise.all([fetchAPI('/broadcasts', { populate: '*' })])

  return {
    props: {
      broadcasts: broadcastsRes,
    },
    revalidate: 1,
  }
}

export default Broadcasts
