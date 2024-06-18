import Image from "next/image"

import { useQuery } from '@apollo/client';

import sponsorsQuery from '@/graphql/queries/sponsors';

export default function Sponsors() {
  const { data, loading, error } = useQuery(sponsorsQuery);
  const content = data?.sponsors?.data?.map((item: any) => item.attributes.items[0])

  const renderSponsor = ({ title, image }: { title: string, image: any }) => {
    const imageUrl = image?.data?.attributes?.formats?.medium?.url

    return (
      <li key={title} className="w-1/2 sm:w-1/5 h-32">
        <a href="#">
          <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
        </a>
      </li>
    )
  }

  return (
    <section id="sponsors" className="border-2 border-solid border-lightGrey rounded-lg p-6 sm:p-10">
      <h2 className="mb-4 text-4xl">Patrocinadores</h2>
      <div>
        <ul className="flex flex-wrap justify-center gap-4 overflow-hidden">
          {content?.map(renderSponsor)}
        </ul>
      </div>
    </section>
  )
}
