import { Box, Heading } from '@chakra-ui/react'
import { Button } from '@components/UI/Button'
import { getStrapiMedia } from '@lib/media'
import React from 'react'
import Moment from 'react-moment'

import type { Broadcast } from '../../../interfaces/Broadcast'
import AppHead from '../../../utils/AppHead'

export interface props {
  broadcast: Broadcast
}

const BroadcastView: React.FC<props> = props => {
  const { broadcast, children, ...rest } = props

  const imageUrl = getStrapiMedia(broadcast.attributes.image)
  return (
    <>
      <AppHead title="Broadcasts" description="Broadcasts" />
      <Box>
        <Heading as="h1" size="xl">
          {broadcast.attributes.title}
        </Heading>
        <img src={imageUrl} width="200px" />
        <p>{broadcast.attributes.title}</p>
        <Moment format="MMM Do YYYY">{broadcast.attributes.published_at}</Moment>
        <Button>Play</Button>
      </Box>
    </>
  )
}

export default BroadcastView
