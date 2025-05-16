"use client"

import { Link } from "@inertiajs/react"
import { useState, useEffect } from "react"
import type { Course } from "@/types"
import { Video } from "lucide-react"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
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
      className={`bg-white rounded-xl border-none overflow-hidden shadow-sm hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all duration-300 h-full flex flex-col transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: "calc(var(--delay, 0) * 100ms)" }}
    >
      {/* Course Image */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={course.image || `/images/placeholders/course-card.png`} //Change the placeholder at public/images/placeholders/course-card.png (make sure use the same filename)
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {course.rating} ({course.sold} terjual)
          </span>
        </div>

        {/* Category */}
        <div className="px-3 py-1 bg-[#ECF3FD] w-fit text-blue-500 text-xs font-medium rounded-full mb-2">
          {course.category}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          <Link href={`/course/${course.id}`} className="hover:text-blue-500 transition-colors duration-300">
            {course.title}
          </Link>
        </h3>

        {/* Video Count */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Video size={16} className="text-gray-500"/>
            <span>{course.videos} video</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="font-bold text-blue-500">
            {course.price === 0 ? (
              <span className="text-green-500">Gratis</span>
            ) : (
              <>
                <span>Rp{course.price.toLocaleString("id-ID")}</span>
                {course.discount_price && (
                  <span className="text-gray-400 text-sm line-through ml-2">
                    Rp{course.discount_price.toLocaleString("id-ID")}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
