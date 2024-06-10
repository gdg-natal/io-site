import Button from '@/components/Button'

export default function Location() {
  return (
    <section id="location" className="flex border-2 border-solid border-lightGrey rounded-lg p-10 bg-[url('/images/location-bg.png')] bg-cover bg-center">
      <div className="bg-black rounded-lg p-8 h-80 pr-32">
        <h2 className="mb-4 text-4xl">Sebrae RN</h2>
        <address className="mb-8">
          Avenida Lima e Silva, 76<br />
          Lagoa Nova, Natal-RN<br />
          59000000
        </address>
        <Button outlined>Ver no mapa</Button>
      </div>
    </section>
  )
}
