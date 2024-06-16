import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic'

import exploreQuery from '@/graphql/queries/explore';

import Button from '@/components/Button'

const Countdown = dynamic(() => import('./Countdown'), { ssr: false })

export default function Explorer() {
  const { data, loading, error } = useQuery(exploreQuery);

  const content = data?.explore?.data?.attributes

  return (
    <section id="explorer" className="w-full md:pb-40 bg-[url('/images/explore-bg.png')] bg-bottom bg-no-repeat bg-contain">
      <div className="container flex flex-col md:flex md:flex-row md:justify-center mx-auto py-16 pb-40">
        <aside className='w-full flex justify-center pt-8 md:py-0 order-2 md:order-1'>
          {!loading && <Countdown eventTime={content?.eventTime} />}
        </aside>
        <aside className="md:px-16 flex flex-col items-start w-full order-1 md:order-2">
          <h1 className="mb-4 text-4xl">{content?.title}</h1>
          <h2 className="mb-8 text-xl">{content?.description}</h2>
          <Button href={content?.registrationUrl} target="_blank">Registre-se</Button>
        </aside>
      </div>
    </section>
  )
}
