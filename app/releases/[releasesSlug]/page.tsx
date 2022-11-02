async function getData(params) {
  const res = await fetch('https://cms.outlet.delivery/api/releases?filters[slug]=' + params + '&populate=*')
  return res.json()
}

export default async function Release({ params }) {
  const response = await getData(params.releasesSlug)
  const release = response?.data

  return (
    <>
      <h2>{release[0].attributes.title}</h2>
      <p>{release[0].attributes.description}</p>
    </>
  )
}
