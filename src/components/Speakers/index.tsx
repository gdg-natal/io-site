import { useQuery } from '@apollo/client';

import SpeakerCard from "./SpeakerCard";

import speakersQuery from '@/graphql/queries/speakers';

export default function Speakers() {
  const { data, loading, error } = useQuery(speakersQuery);
  const content = data?.speakers?.data?.map((item: any) => {
    const image = 
    item.attributes?.image?.data?.attributes?.formats?.small?.url ||
    item.attributes?.image?.data?.attributes?.formats?.thumbnail?.url

    return ({
      ...item.attributes,
      image
    })
  })

  return (
    <section id="speakers" className='w-full'>
      <h2 className="mb-8 text-4xl">Palestrantes</h2>
      <ul className="flex gap-6 overflow-x-auto snap-mandatory snap-x pb-4">
        {content?.map(((item: any) => <SpeakerCard key={item.name} {...item} />))}
      </ul>
    </section>
  )
}
