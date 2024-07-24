interface ISpeakerCardProps {
  name: string
  description: string
  title: string
  image: string
}

export default function SpeakerCard({ name, description, title, image }: ISpeakerCardProps) {
  return (
    <li className="bg-lightGrey rounded-lg border-2 border-solid border-lightGrey min-w-[300px] snap-start">
      <div id="profile-photo" className="bg-black rounded-lg py-8 bg-speakersBg bg-center bg-[length:315px] bg-no-repeat bg-[-16px_bottom]">
        <figure className="w-40 h-40 mx-auto rounded-full overflow-hidden">
          <img src={image} alt={`${name} photo`} className="object-cover w-full h-full" />
        </figure>
      </div>
      <div className="text-black px-4 py-6">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="mb-4 text-sm">{title}</h3>
        <p className="indent-2">{description}</p>
      </div>
    </li>
  )
}
