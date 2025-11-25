'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Override default smooth scroll behavior for slower animation
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (!href) return
        
        const targetElement = document.querySelector(href)
        if (!targetElement) return
        
        const navHeight = 84 // Height of sticky nav (exact uit Illustrator)
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
          
          window.scrollTo(0, startPosition + distance * ease)
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }
        
        requestAnimationFrame(animation)
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  return null
}

