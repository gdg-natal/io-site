import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SponsorsTV({ data }: any) {
  const [isSponsors, setIsSponsors] = useState(false)
  const [opacity, setIsOpacity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSponsors(!isSponsors)
    }, 10000)

    return () => clearInterval(interval)
  }, [isSponsors])

  return (
    <>
      <h5 className="text-2xl font-bold mb-6 animate-fade">{isSponsors ? 'Patrocinio' : 'Apoio'}:</h5>
      <ul className="flex justify-center items-center gap-2 animate-fade">
        {data[isSponsors ? 'sponsors' : 'helpers']?.map((item: any) => (
          <li key={item?.id}>
            <Image src={item?.image} alt={item?.title} width={200} height={50} className="h-[50px] object-contain" />
          </li>
        ))}
      </ul>
    </>
  )
}
