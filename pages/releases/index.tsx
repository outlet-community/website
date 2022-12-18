import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import { Button } from '../../components/UI/Button'
import { fetchAPI } from '../../lib/api'
import AppHead from '../../utils/AppHead'

const Releases = ({ releases }) => {
  return (
    <>
      <AppHead title="Releases" />
      <Button>OUTLET DELIVERY</Button>
      {releases.map((release, i) => {
        return (
          <Box key={i} borderRadius={50} borderWidth={2} borderColor="black">
            <Heading>{release.attributes.title}</Heading>
            <Text>{release.attributes.description}</Text>
          </Box>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [releasesRes] = await Promise.all([fetchAPI('/releases', { populate: '*' })])

  return {
    props: {
      releases: releasesRes.data,
    },
    revalidate: 1,
  }
}

export default Releases
