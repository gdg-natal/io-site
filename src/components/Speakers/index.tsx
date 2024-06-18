import { useQuery } from '@apollo/client';

import SpeakerCard from "./SpeakerCard";

import speakersQuery from '@/graphql/queries/speakers';

export default function Speakers() {
  const { data, loading, error } = useQuery(speakersQuery);
  const content = data?.speakers?.data?.map((item: any) => {
    const speaker = item.attributes.items[0]
    return ({
      ...speaker,
      image: speaker?.image?.data?.attributes?.formats?.small?.url
    })
  })

  return (
    <section id="speakers">
      <h2 className="mb-8 text-4xl">Palestrantes</h2>
      <ul className="flex gap-6 overflow-x-auto snap-mandatory snap-x">
        {content?.map(((item: any) => <SpeakerCard key={item.name} {...item} />))}
      </ul>
    </section>
  )
}
