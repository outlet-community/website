import { Button } from '@components/UI/Button'
import { getStrapiMedia } from '@lib/media'
import Moment from 'react-moment'

import type { Broadcast } from '../../../interfaces/Broadcast'

const BroadcastCard: React.FC<Broadcast> = props => {
  const { broadcast, ...rest } = props

  const imageUrl = getStrapiMedia(broadcast.attributes.image)
  return (
    <>
      <img src={imageUrl} width="200px" />
      <p>{broadcast.attributes.title}</p>
    </>
  )
}

export default BroadcastCard
