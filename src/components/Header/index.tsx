'use client'
import Image from "next/image"
import logo from '@/images/logo.svg'

import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => setIsOpen(prev => !prev)

  console.log('isopen', isOpen)

  const menuItems = [
    { tag: 'Explorar', href: 'explore' }, { tag: 'Sobre', href: 'about' }, { tag: 'Localização', href: 'location' },
    { tag: 'Patrocinadores', href: 'sponsors' }, { tag: 'Palestrantes', href: 'speakers' }
  ]

  return (
    <nav className="border-b-2 border-solid border-lightGrey text-white/90">
      <div className="text-white flex items-center gap-4 container mx-auto px-4 justify-between relative">
        <figure>
          <Image src={logo} alt="Google I/O Extended 2024 - Natal" />
        </figure>
        <ul className={`bg-[#202124] sm:pl-8 flex flex-col sm:flex-row w-full absolute sm:relative left-0 ${isOpen ? 'md:py-0 top-[100%]' : 'sm:visible invisible'}`} onClick={handleMenu}>
          {menuItems.map(item => (
            <li key={item.tag}
              className={`cursor-pointer py-4 sm:py-6 p-6 sm:hover:[box-shadow:0_2px_0_gray] border-b-[1px] border-solid border-lightGrey sm:border-b-0`}>
              <a href={`#${item.href}`}>{item.tag}</a>
            </li>
          ))}
        </ul>

        <span className="flex md:hidden cursor-pointer p-4 -mr-4" onClick={handleMenu}>
          {isOpen ? <FiX className="size-6" /> : <FiMenu className="size-6" />}
        </span>
      </div>
    </nav>
  )
}