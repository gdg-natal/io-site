import Image from "next/image"

import logo from '@/images/logo.png'

export default function Footer() {
  return (
    <footer className="border-b-2 border-solid border-lightGrey pt-16">
      <div className="container mx-auto flex items-center">
        <figure>
          <Image src={logo} alt="Google I/O Extended 2024 - Natal" />
        </figure>
        <p>footer</p>
      </div>
    </footer>
  )
}