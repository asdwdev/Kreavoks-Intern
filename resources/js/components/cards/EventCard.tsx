"use client"

import { Link } from "@inertiajs/react"
import { useState, useEffect } from "react"
import type { Event } from "@/types"
import { Calendar } from "lucide-react"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Format tanggal dengan memastikan start_date adalah string valid
  const formatDate = (dateString: string) => {
    if (!dateString) return "TBA"

    try {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      return new Date(dateString).toLocaleDateString("id-ID", options)
    } catch (error) {
      console.error("Invalid date format:", dateString)
      return dateString // Return the original string if it can't be parsed
    }
  }

  // Cek apakah event masih akan datang
  const isUpcoming = () => {
    if (!event.start_date) return false
    try {
      const eventDate = new Date(event.start_date)
      const today = new Date()
      return eventDate > today
    } catch (error) {
      return false
    }
  }

  // Hitung berapa hari lagi event akan berlangsung
  const daysUntilEvent = () => {
    if (!event.start_date) return 0
    try {
      const eventDate = new Date(event.start_date)
      const today = new Date()
      const diffTime = eventDate.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    } catch (error) {
      return 0
    }
  }

  const upcoming = isUpcoming()
  const daysLeft = daysUntilEvent()

  return (
    <div
      className={`bg-white rounded-xl border-none overflow-hidden shadow-sm hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all duration-300 h-full flex flex-col transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: "calc(var(--delay, 0) * 100ms)" }}
    >
      {/* Workshop Tag */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-full shadow-sm">
          {event.type.toUpperCase()} #{event.id.toString().padStart(2, "0")}
        </span>
      </div>

      {/* Event Image */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={event.image || `/images/placeholders/event-card.png`} //Change the placeholder at public/images/placeholders/event-card.png (make sure use the same filename)
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Event Status */}
        <div className="flex justify-between items-center mb-2">
          {/* Days Left */}
          {upcoming && daysLeft > 0 && (
            <div className="text-sm font-medium">
              <span className="text-yellow-500">{daysLeft} hari lagi!</span>
            </div>
          )}
          <div>
            {event.status === "active" ? (
              <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs font-medium rounded-full">Ongoing</span>
            ) : (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Closed</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          <Link href={`/event/${event.id}`} className="hover:text-blue-500 transition-colors duration-300">
            {event.title}
          </Link>
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">{formatDate(event.start_date)}</span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="font-bold text-blue-500">
              {event.price === 0 ? (
                <span className="text-green-500">Gratis</span>
              ) : (
                <>
                  <span>Rp{event.price.toLocaleString("id-ID")}</span>
                  {event.discount_price && (
                    <span className="text-gray-400 text-sm line-through ml-2">
                      Rp{event.discount_price.toLocaleString("id-ID")}
                    </span>
                  )}
                </>
              )}
            </div>
            {event.status === "active" && (
              <Link
                href={`/event/${event.id}`}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
              >
                Early Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
