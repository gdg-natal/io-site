import Button from '@/components/Button'
import Countdown from './Countdown'

export default function Explorer() {
  return (
    <section id="explorer" className="bg-[url('/images/explore-bg.png')] bg-bottom bg-no-repeat bg-contain">
      <div className="container mx-auto grid grid-cols-2 py-16 pb-80">
        <aside>
          <Countdown />
        </aside>
        <aside className="p-16 flex flex-col items-start justify-center w-2/3">
          <h1 className="mb-4 text-4xl">Confira o <br />Google I/O Extended<br /> 2024 - Natal</h1>
          <h2 className="mb-8 text-xl">O Google I/O é uma conferência anual organizada pelo Google, que reúne desenvolvedores, empreendedores e entusiastas de tecnologia de todo o mundo.</h2>
          <Button>Registre-se</Button>
        </aside>
      </div>
    </section>
  )
}
