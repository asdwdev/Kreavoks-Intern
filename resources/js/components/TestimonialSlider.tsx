"use client"

import { useRef, useEffect } from "react"
import type { Testimonial } from "@/types"
import TestimonialCard from "./cards/TestimonialCard"

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  // Split testimonials into two groups
  const halfLength = Math.ceil(testimonials.length / 2)
  const topRowTestimonials = testimonials.slice(0, halfLength)
  const bottomRowTestimonials = testimonials.slice(halfLength).concat(testimonials.slice(halfLength))

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTopRow = [...topRowTestimonials, ...topRowTestimonials]
  const duplicatedBottomRow = [...bottomRowTestimonials, ...bottomRowTestimonials]

  useEffect(() => {
    // Function to animate the scroll
    const animateScroll = () => {
      if (topRowRef.current && bottomRowRef.current) {
        // Top row scrolls left
        if (topRowRef.current.scrollLeft >= topRowRef.current.scrollWidth / 2) {
          topRowRef.current.scrollLeft = 0
        } else {
          topRowRef.current.scrollLeft += 0.5
        }

        // Bottom row scrolls right
        if (bottomRowRef.current.scrollLeft <= 0) {
          bottomRowRef.current.scrollLeft = bottomRowRef.current.scrollWidth / 2
        } else {
          bottomRowRef.current.scrollLeft -= 0.5
        }
      }
    }

    // Set up the animation interval
    const animationInterval = setInterval(animateScroll, 20)

    // Clean up the interval on component unmount
    return () => clearInterval(animationInterval)
  }, [])

  return (
    <div className="w-full space-y-6">
      {/* Top row - scrolls left */}
      <div className="relative w-full overflow-hidden">
        {/* Fade effect on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div
          ref={topRowRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar py-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {duplicatedTopRow.map((testimonial, index) => (
            <div key={`top-${testimonial.id}-${index}`} className="flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls right */}
      <div className="relative w-full overflow-hidden">
        {/* Fade effect on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div
          ref={bottomRowRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar py-2"
          style={{ scrollBehavior: "smooth" }}
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
