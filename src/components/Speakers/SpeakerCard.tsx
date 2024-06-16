interface ISpeakerCardProps {
  name: string
  description: string
  title: string
  image: string
}

export default function SpeakerCard({ name, description, title, image }: ISpeakerCardProps) {
  return (
    <li className="bg-lightGrey rounded-lg border-2 border-solid border-lightGrey">
      <div id="profile-photo" className="bg-black rounded-lg py-8 bg-speakersBg bg-center bg-[length:220px] bg-no-repeat bg-[center_-40px]">
        <figure className="w-1/2 mx-auto rounded-full overflow-hidden">
          <img src={image} alt={`${name} photo`} width="100%" height="100%" />
        </figure>
      </div>
      <div className="text-black px-4 py-6">
        <h2 className="font-bold text-lg text-center">{name}</h2>
        <h3 className="mb-4 text-center text-sm">{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}
