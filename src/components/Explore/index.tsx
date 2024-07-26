import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic'

import exploreQuery from '@/services/queries/explore';

import Button from '@/components/Button'

const Countdown = dynamic(() => import('./Countdown'), { ssr: false })

export default function Explorer() {
  const { data, loading, error } = useQuery(exploreQuery);

  const content = data?.explore?.data?.attributes

  return (
    <section id="explorer" className="w-full md:pb-40 sm:bg-[url('/images/explore-bg.png')] bg-no-repeat md:bg-contain bg-[bottom_right]">
      <div className="container flex flex-col md:items-center md:flex-row mx-auto px-4 py-8 md:pt-16 md:pb-40">
        <aside className='md:w-1/2 flex justify-center pt-8 md:py-0 order-2 md:order-1'>
          {!loading && <Countdown eventTime={content?.eventTime} />}
        </aside>
        <aside className="md:w-1/2 md:pl-16 xl:pr-48 flex flex-col items-start order-1 md:order-2">
          <h1 className="mb-4 text-4xl">{content?.title}</h1>
          <h2 className="mb-8 text-lg indent-2">{content?.description}</h2>
          <Button href={content?.registrationUrl} target="_blank">Registre-se</Button>
        </aside>
      </div>
    </section>
  )
}
