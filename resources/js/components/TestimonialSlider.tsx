"use client"

import { useRef, useEffect, useState } from "react"
import type { Testimonial } from "@/types"
import TestimonialCard from "./cards/TestimonialCard"

interface TestimonialSliderProps {
    testimonials: Testimonial[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
    const topRowRef = useRef<HTMLDivElement>(null)
    const bottomRowRef = useRef<HTMLDivElement>(null)
    const [isTopHovered, setIsTopHovered] = useState(false)
    const [isBottomHovered, setIsBottomHovered] = useState(false)

    const halfLength = Math.ceil(testimonials.length / 2)
    const topRowTestimonials = testimonials.slice(0, halfLength)
    const bottomRowTestimonials = testimonials.slice(halfLength)

    // Double the content to simulate infinite scroll
    const duplicatedTopRow = [...topRowTestimonials, ...topRowTestimonials]
    const duplicatedBottomRow = [...bottomRowTestimonials, ...bottomRowTestimonials]

    useEffect(() => {
        let animationFrameId: number

        const animate = () => {
            const top = topRowRef.current
            const bottom = bottomRowRef.current

            if (top && !isTopHovered) {
                if (top.scrollLeft >= top.scrollWidth / 2) {
                    top.scrollLeft = 0
                } else {
                    top.scrollLeft += 0.5
                }
            }

            if (bottom && !isBottomHovered) {
                if (bottom.scrollLeft <= 0) {
                    bottom.scrollLeft = bottom.scrollWidth / 2
                } else {
                    bottom.scrollLeft -= 0.5
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrameId)
    }, [isTopHovered, isBottomHovered])

    return (
        <div className="w-full space-y-6">
            {/* Top row */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div
                    ref={topRowRef}
                    className="flex gap-4 overflow-x-auto hide-scrollbar py-2"
                    onMouseEnter={() => setIsTopHovered(true)}
                    onMouseLeave={() => setIsTopHovered(false)}
                >
                    {duplicatedTopRow.map((testimonial, index) => (
                        <div key={`top-${testimonial.id}-${index}`} className="flex-shrink-0">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom row */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div
                    ref={bottomRowRef}
                    className="flex gap-4 overflow-x-auto hide-scrollbar py-2"
                    onMouseEnter={() => setIsBottomHovered(true)}
                    onMouseLeave={() => setIsBottomHovered(false)}
                >
                    {duplicatedBottomRow.map((testimonial, index) => (
                        <div key={`bottom-${testimonial.id}-${index}`} className="flex-shrink-0">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
