import Image from "next/image"

import logo from '@/images/logo.png'

export default function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto flex items-center">
        <figure>
          <Image src={logo} alt="Google I/O Extended 2024 - Natal" />
        </figure>
        <p>footer</p>
      </div>
    </footer>
  )
}