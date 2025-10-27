"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Droplet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Equipo', href: '#team' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-[#4FC3F7] opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
        {/* Logo más grande y sin animación */}
        <img 
          src="/logos/yaku-logo-full.png" 
          alt="Yaku Hidro Logo" 
          className="h-15 w-auto relative"  // Cambios: h-12 para agrandar, quitado wave-animation
        />
      </div>
    </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#1976D2] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4FC3F7] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button
              asChild
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white ripple"
            >
              <a href="#contact">Contáctanos</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1976D2] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-[#1976D2] hover:bg-gray-50 px-4 rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <Button
                asChild
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contáctanos
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
