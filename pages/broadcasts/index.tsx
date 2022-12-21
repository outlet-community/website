import { Box, Heading, Text } from '@chakra-ui/react'
import BroadcastCard from '@components/Broadcast/BroadcastCard/BroadcastCard'
import { Button } from '@components/UI/Button'
import Link from 'next/link'
import React from 'react'

import type { Broadcast, BroadcastAttributes, BroadcastData } from '../../interfaces/Broadcast'
import { fetchAPI } from '../../lib/api'
import AppHead from '../../utils/AppHead'

const Broadcasts: React.FC<{ broadcasts: Broadcast }> = props => {
  const { broadcasts } = props

  return (
    <>
      <AppHead title="Broadcasts" description="Broadcasts" />
      <Box>
        <Heading as="h1" size="xl">
          Broadcasts
        </Heading>
        {broadcasts.data.map(broadcast => (
          <Box key={broadcast.id}>
            <Link href={`/broadcast/${broadcast.attributes.slug}`}>
              <a>
                <BroadcastCard broadcast={broadcast} />
              </a>
            </Link>
          </Box>
        ))}
      </Box>
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
