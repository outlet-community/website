async function getData() {
  const res = await fetch('https://cms.outlet.delivery/api/releases?populate=*')
  return res.json()
}

export default async function Releases() {
  const response = await getData()
  const releases = response?.data

  const MAX_LENGTH = 250

  return (
    <div>
      {releases.map((release: { id: number; attributes: { title: string; description: string } }) => (
        <div key={release.id}>
          <h2>
            <a href={'releases/' + release.attributes.slug}>{release.attributes.title}</a>
          </h2>
          <p>{release.attributes.description.substring(0, MAX_LENGTH) + ' ...'}</p>
        </div>
      ))}
    </div>
  )
}
