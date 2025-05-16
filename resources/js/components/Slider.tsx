"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState, useRef, useEffect, useCallback } from "react"

interface SliderProps<T> {
    items: T[]
    renderItem: (item: T, index: number) => React.ReactNode
    autoplay?: boolean
    autoplayInterval?: number
}

export default function Slider<T>({
    items,
    renderItem,
    autoplay = false,
    autoplayInterval = 5000,
}: SliderProps<T>) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [itemWidth, setItemWidth] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(1)

    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage))

    // Animation on mount
    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Update itemWidth and itemsPerPage on resize
    useEffect(() => {
        const updateDimensions = () => {
            if (!sliderRef.current) return
            const item = sliderRef.current.querySelector("div > div")
            if (item) {
                const width = (item as HTMLElement).clientWidth
                const containerWidth = sliderRef.current.clientWidth
                setItemWidth(width)
                setItemsPerPage(Math.max(1, Math.floor(containerWidth / width)))
            }
        }

        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [items])

    // Autoplay functionality
    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            if (!sliderRef.current || isDragging) return
            const next = (currentPage + 1) % totalPages
            scrollToPage(next)
        }, autoplayInterval)

        return () => clearInterval(interval)
    }, [autoplay, autoplayInterval, isDragging, currentPage, totalPages])

    const scrollToPage = (pageIndex: number) => {
        if (sliderRef.current) {
            const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
            const offset = Math.min(pageIndex * itemWidth * itemsPerPage, maxScroll)
            sliderRef.current.scrollTo({ left: offset, behavior: "smooth" })
            setCurrentPage(pageIndex)
        }
    }

    const nextPage = () => {
        const nextIndex = Math.min(currentPage + 1, totalPages - 1)
        scrollToPage(nextIndex)
    }

    const prevPage = () => {
        const prevIndex = Math.max(currentPage - 1, 0)
        scrollToPage(prevIndex)
    }

    const handleScroll = () => {
        if (!sliderRef.current || itemWidth === 0) return

        const scrollX = sliderRef.current.scrollLeft
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth

        // Kalau mendekati ujung (dalam 1px toleransi), anggap halaman terakhir
        if (Math.abs(scrollX - maxScroll) < 2) {
            if (currentPage !== totalPages - 1) setCurrentPage(totalPages - 1)
            return
        }

        const rawPage = scrollX / (itemWidth * itemsPerPage)
        const page = Math.floor(rawPage)
        if (page !== currentPage) setCurrentPage(page)
    }

    useEffect(() => {
        const slider = sliderRef.current
        if (slider) {
            slider.addEventListener("scroll", handleScroll)
            return () => slider.removeEventListener("scroll", handleScroll)
        }
    }, [itemWidth, itemsPerPage, currentPage])

    // Drag/Touch logic
    const startDrag = (x: number) => {
        setIsDragging(true)
        setStartX(x - (sliderRef.current?.offsetLeft || 0))
        setScrollLeft(sliderRef.current?.scrollLeft || 0)
    }

    const moveDrag = (x: number) => {
        if (!isDragging || !sliderRef.current) return
        const walk = (x - startX) * 2
        sliderRef.current.scrollLeft = scrollLeft - walk
    }

    const stopDrag = () => {
        setIsDragging(false)
    }

    return (
        <div className="relative">
            <div
                ref={sliderRef}
                className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
                onMouseDown={(e) => startDrag(e.pageX)}
                onMouseMove={(e) => moveDrag(e.pageX)}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onTouchStart={(e) => startDrag(e.touches[0].pageX)}
                onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
                onTouchEnd={stopDrag}
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

            {totalPages > 1 && (
                <div className="flex justify-end mt-4 gap-2">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300"
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages - 1}
                        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300"
                        aria-label="Next page"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    )
}
