'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Over Lies', href: '#over-lies' },
  { label: 'Over Cranio', href: '#over-cranio' },
  { label: 'Voor wie', href: '#voor-wie' },
  { label: 'Voor wat', href: '#voor-wat' },
  { label: 'Vragen', href: '#vragen' },
  { label: 'Praktisch', href: '#praktisch' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      if (current) setActiveSection(`#${current}`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: '#ffffff',
        width: '100vw', 
        maxWidth: '100%',
        height: '84px'
      }}
    >
      <div className="h-full flex items-center relative">
        {/* Logo - Left (ALTIJD 24px van scherm rand, vaste grootte) */}
        <a href="#hero" className="absolute z-50" style={{ left: '24px' }}>
          <Image 
            src="/images/logo_lies.svg" 
            alt="Lies Christiaens Logo" 
            width={36} 
            height={36}
            style={{ width: '36px', height: '36px' }}
            quality={100}
            unoptimized
          />
        </a>

        {/* Desktop Navigation Links - Centered op scherm, dynamische gap dichter bij elkaar */}
        <ul 
          className="items-center absolute left-1/2 transform -translate-x-1/2 hidden lg:flex"
          style={{ 
            gap: 'clamp(16px, 3.5vw, 80px)'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-4 py-1 rounded-full whitespace-nowrap transition-all duration-300"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Mundial-Light, Mundial, sans-serif',
                    fontWeight: 300,
                    color: isActive ? '#ffffff' : '#4a5d23',
                    backgroundColor: isActive ? '#a0b551' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(160, 181, 81, 0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button - Rechts (verschijnt als nav buttons verdwijnen) */}
        <button 
          className="lg:hidden text-olive-dark z-50 absolute"
          style={{ right: '24px' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - verschijnt op alle schermen < lg */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 shadow-md" style={{ backgroundColor: '#ffffff' }}>
          <ul className="flex flex-col py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleMobileNavClick(item.href)}
                    className="block px-6 py-3 transition-all duration-300"
                    style={{
                      fontSize: '18px',
                      fontFamily: 'Mundial-Light, Mundial, sans-serif',
                      fontWeight: 300,
                      color: isActive ? '#ffffff' : '#4a5d23',
                      backgroundColor: isActive ? '#a0b551' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(160, 181, 81, 0.1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

