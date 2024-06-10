interface ISpeakerCardProps {
  name: string
  description: string
  title: string
}

export default function SpeakerCard({ name, description, title }: ISpeakerCardProps) {
  return (
    <li className="bg-lightGrey rounded-lg border-2 border-solid border-lightGrey">
      <div id="profile-photo" className="bg-black rounded-lg py-8">
        <figure className="w-1/2 mx-auto rounded-full overflow-hidden">
          <img src="https://www.wycliffe.ca/wp-content/uploads/bb-plugin/cache/member-fallback-user-image-300x300-circle-4b1323daf0b95dbc95352417464ca5d3-605afc59e679f.png" alt="Google I/O Extended 2024 - Natal" width="100%" height="100%" />
        </figure>
      </div>
      <div className="text-black px-4 py-6">
        <h2 className="font-bold mb-1">{name}</h2>
        <h3 className="mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}
