"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface SliderProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  autoplay?: boolean
  autoplayInterval?: number
}

export default function Slider<T>({ items, renderItem, autoplay = false, autoplayInterval = 5000 }: SliderProps<T>) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4 // Adjust based on your layout

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage)

  // Animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      if (sliderRef.current && !isDragging) {
        const nextPage = (currentPage + 1) % totalPages
        scrollToPage(nextPage)
      }
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval, isDragging, currentPage, totalPages])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const scrollToPage = (pageIndex: number) => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth
      sliderRef.current.scrollTo({
        left: pageIndex * containerWidth,
        behavior: "smooth",
      })
      setCurrentPage(pageIndex)
    }
  }

  const nextPage = () => {
    const nextPageIndex = Math.min(currentPage + 1, totalPages - 1)
    scrollToPage(nextPageIndex)
  }

  const prevPage = () => {
    const prevPageIndex = Math.max(currentPage - 1, 0)
    scrollToPage(prevPageIndex)
  }

  // Update current page based on scroll position
  const handleScroll = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth
      const scrollPosition = sliderRef.current.scrollLeft
      const newPage = Math.round(scrollPosition / containerWidth)
      if (newPage !== currentPage) {
        setCurrentPage(newPage)
      }
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", handleScroll)
      return () => {
        slider.removeEventListener("scroll", handleScroll)
      }
    }
  }, [currentPage])

  return (
    <div className="relative">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
            style={{ "--delay": index } as React.CSSProperties}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Navigation buttons at bottom right */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300"
            aria-label="Previous page"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300"
            aria-label="Next page"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
