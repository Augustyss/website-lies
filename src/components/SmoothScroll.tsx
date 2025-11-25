'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Override default smooth scroll behavior for slower animation
    const handleClick = (e: MouseEvent) => {
      // Find the closest anchor element
      let element = e.target as HTMLElement | null
      let link: HTMLAnchorElement | null = null
      
      // Traverse up the DOM tree to find anchor
      while (element && !link) {
        if (element.tagName === 'A' && element.getAttribute('href')?.startsWith('#')) {
          link = element as HTMLAnchorElement
          break
        }
        element = element.parentElement
      }
      
      if (!link) return
      
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      
      e.preventDefault()
      e.stopPropagation()
      
      const targetElement = document.querySelector(href)
      if (!targetElement) return
      
      const navHeight = 84 // Height of sticky nav
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1500 // 1.5 seconds for smooth scroll
      let start: number | null = null
      
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2
      }
      
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)
        
        window.scrollTo({
          top: startPosition + distance * ease,
          behavior: 'auto' // Disable native smooth scroll
        })
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        } else {
          // Update URL hash after animation completes
          window.history.pushState(null, '', href)
        }
      }
      
      requestAnimationFrame(animation)
    }
    
    // Use capture phase to catch events earlier
    document.addEventListener('click', handleClick, true)
    
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])
  
  return null
}
