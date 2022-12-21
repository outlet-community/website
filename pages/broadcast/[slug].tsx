import BroadcastView from '@components/Broadcast/BroadcastView/BroadcastView'
import { Button } from '@components/UI/Button'
import { fetchAPI } from '@lib/api'
import { getStrapiMedia } from '@lib/media'
import Moment from 'react-moment'

import NextImage from '../../components/image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import AppHead from '../../utils/AppHead'

const Broadcast = ({ broadcast }) => {
  return (
    <>
      <AppHead title={broadcast.attributes.title} description={broadcast.attributes.description} />
      <BroadcastView broadcast={broadcast} />
    </>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/broadcasts', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map(broadcast => ({
      params: {
        slug: broadcast.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const broadcastsRes = await fetchAPI('/broadcasts', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  })

  return {
    props: { broadcast: broadcastsRes.data[0] },
    revalidate: 1,
  }
}

export default Broadcast
