'use client'
import Image from "next/image"
import logo from '@/images/logo.svg'

import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { useState } from "react"

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const showMenu = () => setIsOpen(prev => !prev)

  const menuItems = [
    { tag: 'Explorar', href: 'explore' }, { tag: 'Sobre', href: 'about' }, { tag: 'Localização', href: 'location' },
    { tag: 'Patrocinadores', href: 'sponsors' }, { tag: 'Palestrantes', href: 'speakers' }
  ]

  return (
    <nav className="border-b-2 border-solid border-lightGrey text-white/90">
      <div className="w-full h-12 text-white py-4 px-4 md:px-8 flex items-center justify-between gap-4">
        <figure>
          <Image src={logo} alt="Google I/O Extended 2024 - Natal" />
        </figure>
        <ul className={`${!isOpen ? 'hidden md:flex md:flex-row' :
          'flex flex-col items-start md:flex-row absolute md:relative py-10 md:py-0 top-12 left-0 md:top-auto'}
              bg-[#202124] w-full gap-8 items-start md:justify-center px-8 md:px-2`}>
          {
            menuItems.map(item => {
              return (
                <li key={item.tag}
                  className={`w-max cursor-pointer hover:[box-shadow:0_2px_0_white]`}>
                  <a href={`#${item.href}`}>{item.tag}</a>
                </li>
              )
            })
          }
        </ul>

        <span className="flex md:hidden cursor-pointer "
          onClick={showMenu}>
          {
            isOpen ? <FiX className="size-6" /> : <FiMenu className="size-6" />
          }
        </span>
      </div>
    </nav>
  )
}