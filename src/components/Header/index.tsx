import Image from "next/image"

import logo from '@/images/logo.png'

export default function Header() {
  return (
    <nav className="border-b-2 border-solid border-lightGrey">
      <div className="container mx-auto flex items-center">
        <figure>
          <Image src={logo} alt="Google I/O Extended 2024 - Natal" />
        </figure>
        <ul className="text-lightGrey flex px-8">
          <li><a className="p-6 block" href="#">Explorar</a></li>
          <li><a className="p-6 block" href="#">Comunidade</a></li>
          <li><a className="p-6 block" href="#">Sobre</a></li>
        </ul>
      </div>
    </nav>
  )
}