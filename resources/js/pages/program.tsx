"use client"

import { useState, useEffect } from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import type { Course, Event, SharedData } from "@/types"
import CourseCard from "@/components/cards/CourseCard"
import EventCard from "@/components/cards/EventCard"

export default function Program() {
  const { auth } = usePage<SharedData>().props
  const { events } = usePage<SharedData & { events: Event[] }>().props
  const { courses } = usePage<SharedData & { courses: Course[] }>().props

  // State for filtering and pagination
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("courses")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Categories for filtering - diambil dari data yang ada
  const courseCategories = ["all", ...new Set(courses.map((course) => course.category))]
  const eventTypes = ["all", ...new Set(events.map((event) => event.type))]

  // Filter items based on search query and category/type
  const filteredItems =
    activeTab === "courses"
      ? courses.filter(
          (course) =>
            (selectedCategory === "all" || course.category === selectedCategory) &&
            course.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : events.filter(
          (event) =>
            (selectedCategory === "all" || event.type === selectedCategory) &&
            event.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory, activeTab])

  // Reset category when tab changes
  useEffect(() => {
    setSelectedCategory("all")
  }, [activeTab])

  return (
    <AppLayout>
      <Head title="Program - Kreavoks" />
      <div className="flex min-h-screen flex-col bg-white text-black">
        {/* Hero Section with Background */}
        <section className="relative py-16 overflow-hidden bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white pointer-events-none"></div>

          {/* Circular accent */}
          <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-blue-500/10"></div>
          <div className="absolute right-20 bottom-10 w-24 h-24 rounded-full bg-yellow-300/20"></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tingkatkan <span className="text-blue-500">Skill Digital</span> Anda Bersama Kami
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Pilih dari berbagai program pelatihan dan event yang dirancang untuk membantu Anda menguasai
                keterampilan digital yang relevan dengan industri saat ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                  Mulai Belajar Sekarang
                </button>
                <button className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-50 transition duration-300">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex gap-4 p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "courses" ? "bg-blue-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "events" ? "bg-blue-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Events
              </button>
            </div>

            {/* Search */}
            <div className="w-full sm:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-search text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter - dinamis berdasarkan tab aktif */}
          <div className="mb-8 overflow-x-auto hide-scrollbar">
            <div className="flex gap-2 min-w-max pb-2">
              {(activeTab === "courses" ? courseCategories : eventTypes).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? `All ${activeTab === "courses" ? "Categories" : "Types"}` : category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            Showing {filteredItems.length} {activeTab === "courses" ? "courses" : "events"}
          </div>

          {/* Grid of Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item, index) => (
                <div key={index} className="w-full">
                  {activeTab === "courses" ? (
                    <CourseCard course={item as Course} />
                  ) : (
                    <EventCard event={item as Event} />
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <i className="fa-solid fa-chevron-left text-sm"></i>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      currentPage === page ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <i className="fa-solid fa-chevron-right text-sm"></i>
                </button>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Yellow circle accent */}
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-yellow-300/30"></div>
              <div className="absolute left-1/2 bottom-0 w-24 h-24 rounded-full bg-blue-400/30"></div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Tidak yakin program mana yang tepat untuk Anda?
                </h2>
                <p className="text-blue-50 mb-8 text-lg">
                  Konsultasikan kebutuhan belajar Anda dengan tim kami dan dapatkan rekomendasi program yang sesuai
                  dengan tujuan karir Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
                    <i className="fa-brands fa-whatsapp mr-2"></i> Hubungi Kami
                  </button>
                  <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition duration-300">
                    Lihat Semua Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
