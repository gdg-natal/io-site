import { useQuery } from '@apollo/client';

import locationQuery from '@/services/queries/location';

import Button from '@/components/Button'

export default function Location() {
  const { data, loading, error } = useQuery(locationQuery);
  const content = data?.location?.data?.attributes

  return (
    <section id="location" className="flex border-2 border-solid border-lightGrey rounded-lg p-10 bg-[url('/images/location-bg.png')] bg-cover bg-center">
      <div className="bg-black rounded-lg p-8 h-80 sm:pr-32 w-full sm:w-auto">
        <h2 className="mb-4 text-4xl">{content?.title}</h2>
        <address className="mb-8" dangerouslySetInnerHTML={{ __html: content?.address}} />
        <Button outlined href={content?.locationUrl} target="_blank">Ver no mapa</Button>
      </div>
    </section>
  )
}
