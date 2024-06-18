import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic'

import exploreQuery from '@/graphql/queries/explore';

import Button from '@/components/Button'

const Countdown = dynamic(() => import('./Countdown'), { ssr: false })

export default function Explorer() {
  const { data, loading, error } = useQuery(exploreQuery);

  const content = data?.explore?.data?.attributes

  return (
    <section id="explorer" className="bg-[url('/images/explore-bg.png')] bg-bottom bg-no-repeat bg-contain">
      <div className="container mx-auto grid grid-cols-2 py-16 pb-80">
        <aside>
          {!loading && <Countdown eventTime={content?.eventTime} />}
        </aside>
        <aside className="p-16 flex flex-col items-start justify-center lg:w-2/3">
          <h1 className="mb-4 text-4xl">{content?.title}</h1>
          <h2 className="mb-8 text-xl">{content?.description}</h2>
          <Button href={content?.registrationUrl} target="_blank">Registre-se</Button>
        </aside>
      </div>
    </section>
  )
}
