import { useQuery } from '@apollo/client';

import sponsorsQuery from '@/services/queries/sponsors';

import type { StrapiCollectionType } from '@/types/Strapi';

type FormattedData = {
  id: string,
  title: string,
  image: string | undefined,
  type: 'bronze' | 'silver' | 'gold' | 'helper'
}

const LABELS_TEXT: {
  [key: string]: string
} = {
  helpers: 'Apoiadores',
  sponsors: 'Patrocinadores'
}

const getContent = (data: StrapiCollectionType, key: string): { [key: string]: FormattedData[] } => {
  const formattedData = data?.[key]?.data.map(({ attributes, id }) => {
    const image =
      attributes?.image?.data?.attributes?.formats?.small?.url ||
      attributes?.image?.data?.attributes?.formats?.thumbnail?.url

    return ({ ...attributes, id, image })
  })

  const groupedByType = formattedData?.reduce((acc, item) => {
    const type = item.type === 'helper' ? 'helpers' : 'sponsors'

    return { ...acc, [type]: [...(acc[type]), item] }
  }, { sponsors: [], helpers: [] })

  return groupedByType ?? {}
}

export default function Sponsors() {
  const { data, loading, error } = useQuery(sponsorsQuery);
  const content = getContent(data, 'sponsors')

  return (
    <section id="sponsors" className="border-2 border-solid border-lightGrey rounded-lg p-6 sm:p-10 bg-white">
      {Object.keys(content).map(label => (
        <div key={label} className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl text-black">{LABELS_TEXT[label]}</h2>
            <hr className="border-2 border-solid border-lightGrey ml-4 w-full" />
          </div>
          <div className="py-8">
            <ul className="flex flex-wrap justify-center gap-4 overflow-hidden">
              {content[label].map(({ title, image }) => (
                <li key={title} className="w-1/2 sm:w-1/5 h-32">
                  <img src={image} alt={title} className="w-full h-full object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
