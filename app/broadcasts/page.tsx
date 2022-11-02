async function getData() {
  const res = await fetch('https://cms.outlet.delivery/api/broadcasts?populate=*', { cache: 'no-store' })
  return res.json()
}

export default async function Broadcasts() {
  const response = await getData()
  const broadcasts = response?.data

  const MAX_LENGTH = 250

  return (
    <div>
      {broadcasts.map((broadcast: { id: number; attributes: { title: string; description: string } }) => (
        <div key={broadcast.id}>
          <h1>
            <a href={'broadcasts/' + broadcast.attributes.slug}>{broadcast.attributes.title}</a>
          </h1>
          <p>
            {broadcast.attributes.timeStart} • {broadcast.attributes.timeEnd}
          </p>
          <p>{broadcast.attributes.description.substring(0, MAX_LENGTH) + ' ...'}</p>
        </div>
      ))}
    </div>
  )
}
