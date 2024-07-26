
import Image from 'next/image'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'

import useSchedule from '@/hooks/useSchedule'

import morro from '@/images/schedule-morro-bg.png'
import cajueiro from '@/images/schedule-cajueiro-bg.png'
import genipabu from '@/images/schedule-genipabu-bg.png'
import scheduleArrow from '@/images/schedule-arrow.png'

import type { StrapiCollectionType } from '@/types/Strapi';
import sponsorsQuery from '@/services/queries/sponsors';
import SponsorsTV from '@/components/TV/Sponsors';
import LiveCircle from '@/components/LiveCircle';

const stages = { morro, cajueiro, genipabu }

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

const formatTime = (date: string) => new Intl.DateTimeFormat('pt-BR', { timeStyle: 'short' }).format(new Date(date)) ?? ''

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

export default function ScheduleTVS() {
  const router = useRouter()
  const { stage } = router.query
  const { now, next } = useSchedule(stage)
  const { data: sponsorsData, loading, error } = useQuery(sponsorsQuery);
  const sponsors = getContent(sponsorsData, 'sponsors')

  return (
    <div className="bg-white h-full text-black p-12 font-[10px] h-full pb-32">
      <div className="grid grid-cols-[3fr_1fr] gap-6 h-full">
        <div className="flex flex-col justify-between border-2 border-solid border-black rounded-xl p-16">
          <div className={`flex border-2 border-solid border-${now ? 'linearFourthStart' : 'black'} rounded-full p-2 self-start relative`}>
            <LiveCircle live={!!now} />
            <p className={`font-black pl-8 text-${now ? 'linearFourthStart' : 'black'} text-xl`}>AGORA</p>
          </div>
          {now ? (
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="font-black text-7xl py-2">{now?.speaker}</h2>
                <h3 className="font-light text-2xl pb-6 text-lightGreyDarken">{now?.role?.slice(0, 60)}</h3>
                <p className="text-3xl text-black">{now?.title}</p>
              </div>
              {now?.image && (
                <div className="flex pl-3 pb-3 bg-scheduleTVsBG bg-no-repeat bg-left-bottom bg-contain relative bg-[length:400px_400px] ml-auto">
                  <figure className="rounded-full overflow-hidden w-[400px] h-[400px]">
                    <Image className="w-full h-full object-cover" src={now?.image} width={400} height={400} alt={now?.speaker} />
                  </figure>
                  <Image src={scheduleArrow} alt="arrow" className="absolute w-[125px] bottom-[-25px] left-[-40px]" />
                </div>
              )}
            </div>
          ) : <p className="font-bold text-4xl text-center">Sem conteúdo</p>}
          <div className="mt-12">
            <SponsorsTV data={sponsors} />
          </div>
        </div>
        <div className="flex flex-col gap-4 border-2 border-solid border-black rounded-xl p-6 pb-24">
          <p className="border-2 border-solid border-black rounded-xl p-4 text-2xl font-light">a seguir</p>
          {next?.length ? next?.slice(0, 2).map((speaker) => (
            <div key={speaker?.id} className="flex flex-col border-2 border-solid border-black rounded-xl p-4">
              <h4 className="text-2xl font-bold">{speaker?.speaker}</h4>
              <h5 className="pb-4 text-lightGreyDarken">{speaker?.about?.slice(0, 40)}</h5>
              {speaker?.title && <p className="pb-4 text-xl">{speaker?.title}</p>}
              <div className="flex items-center border-2 border-solid border-black rounded-full p-2 self-start">
                <div className="w-4 h-4 rounded-full bg-black" />
                <p className="px-3 text-2xl">{formatTime(speaker?.start)} - {formatTime(speaker?.end)}</p>
              </div>
            </div>
          )) : <p className="self-center font-bold">acabousse :/</p>}
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0">
        <Image src={stages[stage]} className="w-full" alt="background" />
      </div>
    </div>
  )
}
