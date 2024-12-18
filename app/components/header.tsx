// app/components/header.tsx

'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [buttonText, setButtonText] = useState("Schedule Demo")
  const { openForm } = useCTAForm()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonText(prev => prev === "Schedule Demo" ? "Start Free Trial" : "Schedule Demo")
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const menuItems = [
    { title: "Features", href: "#what-you-get" },
    { title: "How It Works", href: "#how-it-works" },
    { title: "Results", href: "#results" },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T2AxAuqMD795FMaChpXHt3YtSxni0Q.png"
                alt="DTG Logo"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 hover:brightness-100 transition-all"
              />
              <span className="text-purple-600 font-semibold text-xl">+</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6BoIoBXPKihzjV1TG3JCCE1sI7BSh.png"
                alt="Secberus Logo"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 hover:brightness-100 transition-all"
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <Button key={index} variant="ghost" asChild>
                <a href={item.href}>{item.title}</a>
              </Button>
            ))}
            <Button className="ml-4" onClick={openForm}>
              {buttonText}
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                {item.title}
              </a>
            ))}
            <Button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium mt-2"
              onClick={() => {
                toggleMenu()
                openForm()
              }}
            >
              {buttonText}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}