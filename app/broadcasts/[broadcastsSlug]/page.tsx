async function getData(params) {
  const res = await fetch('https://cms.outlet.delivery/api/broadcasts?filters[slug]=' + params + '&populate=*')
  return res.json()
}

export default async function Broadcast({ params }) {
  const response = await getData(params.broadcastsSlug)
  const broadcast = response?.data

  return (
    <>
      <h2>{broadcast[0].attributes.title}</h2>
      <p>{broadcast[0].attributes.description}</p>
      <audio controls src={`https://cms.outlet.delivery${broadcast[0].attributes.audio.data.attributes.url}`}></audio>
    </>
  )
}
