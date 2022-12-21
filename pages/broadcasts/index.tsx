import { Box, Heading, Text } from '@chakra-ui/react'
import BroadcastView from '@components/Broadcast/BroadcastView/BroadcastView'
import { Button } from '@components/UI/Button'
import React from 'react'

import type { Broadcast, BroadcastAttributes } from '../../interfaces/Broadcast'
import { fetchAPI } from '../../lib/api'
import AppHead from '../../utils/AppHead'

const Broadcasts: React.FC<Broadcast> = ({ broadcasts }) => {
  return (
    <>
      <AppHead title="Broadcasts" />
      <Button>OUTLET DELIVERY</Button>
      <BroadcastView />
      {broadcasts.data.map((broadcast: Broadcast, i) => {
        return (
          <Box key={i} borderRadius={50} borderWidth={2} borderColor="black">
            <Heading>{broadcast.attributes.title}</Heading>
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
