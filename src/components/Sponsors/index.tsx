import { useQuery } from '@apollo/client';

import sponsorsQuery from '@/graphql/queries/sponsors';

import Button from '@/components/Button';

import type { StrapiCollectionType } from '@/types/Strapi';

type FormattedData = {
  id: string,
  title: string,
  image: string | undefined
}[]

const getContent = (data: StrapiCollectionType, key: string): FormattedData => {
  const formattedData = data?.[key]?.data.map(({ attributes, id }) => {
    const image =
      attributes?.image?.data?.attributes?.formats?.small?.url ||
      attributes?.image?.data?.attributes?.formats?.thumbnail?.url

    return ({ ...attributes, id, image })
  })

  return formattedData ?? []
}

export default function Sponsors() {
  const { data, loading, error } = useQuery(sponsorsQuery);
  const content = getContent(data, 'sponsors')

  const renderSponsor = ({ title, image }: { title: string, image: any }) => {
    return (
      <li key={title} className="w-1/2 sm:w-1/5 h-32">
        <a href="#">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </a>
      </li>
    )
  }

  return (
    <section id="sponsors" className="border-2 border-solid border-lightGrey rounded-lg p-6 sm:p-10">
      <div className="flex justify-between">
        <h2 className="mb-4 text-4xl">Patrocinadores</h2>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center gap-4 overflow-hidden">
          {content?.map(renderSponsor)}
        </ul>
      </div>
    </section>
  )
}
