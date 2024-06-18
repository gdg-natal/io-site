import Image from "next/image"

import logo from '@/images/logo.png'

export default function Footer() {
  return (
    <footer className="pb-4 pt-16">
      <div className="container mx-auto flex justify-center">
        <p className="font-center text-xs">Google I/O Extended 2024 - Natal &copy;</p>
      </div>
    </footer>
  )
}