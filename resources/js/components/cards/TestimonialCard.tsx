"use client"

import { useState, useEffect } from "react"
import type { Testimonial } from "@/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`w-full max-w-xl p-5 flex items-start gap-4 bg-white rounded-xl border-gray-100 border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: "calc(var(--delay, 0) * 100ms)" }}
    >
      <img
        src={testimonial.image || "/placeholder.svg?height=96&width=96"}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover object-top bg-gray-200 flex-shrink-0"
      />
      <div className="flex flex-col gap-1">
        <div>
          <p className="font-semibold text-lg">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
        <p className="text-blue-600 font-semibold">{testimonial.title}</p>
        <p className="text-sm text-gray-700">{testimonial.message}</p>
      </div>
    </div>
  )
}
