import { useQuery } from '@apollo/client';

import sponsorsQuery from '@/graphql/queries/sponsors';

import Button from '@/components/Button'

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
      <div className="flex justify-between">
        <h2 className="mb-4 text-4xl">Patrocinadores</h2>
        <Button href="https://drive.google.com/file/d/1TDD6CJFTu2LmoOWq8A_6xgUDvj10nv9y/view?usp=sharing" target="_blank">MidiaKit</Button>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center gap-4 overflow-hidden">
          {content?.map(renderSponsor)}
        </ul>
      </div>
    </section>
  )
}
