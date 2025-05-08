"use client"

// External packages
import { useState } from "react"
import { Head, Link, usePage, useForm } from "@inertiajs/react"
import CountUp from 'react-countup';

// Layouts
import AppLayout from "@/layouts/app-layout"

// Types
import type { Course, Event, ServicePackage, Testimonial, SharedData } from "@/types"

// Components
import Slider from "@/components/Slider"
import CourseCard from "@/components/cards/CourseCard"
import EventCard from "@/components/cards/EventCard"
import TestimonialCard from "@/components/cards/TestimonialCard"
import ServicePackageSection from "@/components/sections/ServicePackageSection"

export default function Home() {
  const { auth } = usePage<SharedData>().props
  const { events } = usePage<SharedData & { events: Event[] }>().props
  const { courses } = usePage<SharedData & { courses: Course[] }>().props
  const { servicePackages } = usePage<
    SharedData & { servicePackages: Record<"Website" | "Mobile App" | "Design", ServicePackage[]> }
  >().props
  const { testimonials } = usePage<SharedData & { testimonials: Testimonial[] }>().props
  const { post } = useForm()

  const [selectedCategory, setSelectedCategory] = useState<"Website" | "Mobile App" | "Design">("Website")

  const logout = () => {
    post("/logout")
  }

  return (
    <AppLayout>
      <Head title="Kreavoks" />
      <div className="flex min-h-screen flex-col bg-white text-black">
        {/* Section 1: Hero */}
        <section className="relative mb-8 grid grid-cols-1 md:grid-cols-2 md:items-center justify-between gap-8 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]">
        {/* Pseudo-element for fading effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white pointer-events-none"></div>

        {/* Left Content */}
        <div className="relative w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex flex-col items-start gap-4 z-10">
          <div className="gap-2">
            <p className="text-blue-500 text-md md:text-base"><span className="font-bold">No.1</span> Agensi Digitalisasi dan Pemberdayaan Skill</p>
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Masa Depan <span className="text-blue-500">Digital</span> Dimulai dari <span className="text-blue-500">Sini</span>.
            </h1>
          </div>
            
            <p className="text-gray-600 max-w-xl">
                Bersama kami, ubah ide Anda menjadi solusi kreatif yang relevan. Dari <span className="font-medium">pembuatan software</span>, <span className="font-medium">desain UI</span> hingga <span className="font-medium">pelatihan skill digital</span>, kami siap membantu Anda untuk masa depan teknologi.
            </p>

            <button className="hover:scale-105 transition duration-300 cursor-pointer px-6 py-2 text-blue-500 font-semibold bg-blue-50 border border-blue-500 rounded-full flex items-center gap-2 mt-2">
                Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>

            {/* Counter */}
            <div className="px-8 py-4 mt-6 w-full flex flex-col sm:flex-row items-center justify-between bg-[url(/images/backgrounds/CounterBg.svg)] bg-cover rounded-xl gap-4 sm:gap-0">
              
              <div className="flex flex-col items-center text-white text-center sm:text-left sm:items-start sm:border-none border-b border-white/30 pb-4 sm:pb-0 sm:mb-0 w-full sm:w-auto">
                <p className="font-semibold text-lg md:text-2xl">
                  <CountUp end={100} duration={2} />+
                </p>
                <p className="font-normal text-sm md:text-base">Projects</p>
              </div>

              <div className="flex flex-col items-center text-white text-center sm:text-left sm:items-start sm:border-none border-b border-white/30 pb-4 sm:pb-0 sm:mb-0 w-full sm:w-auto">
                <p className="font-semibold text-lg md:text-2xl">
                  <CountUp end={200} duration={2} />+
                </p>
                <p className="font-normal text-sm md:text-base">Courses</p>
              </div>

              <div className="flex flex-col items-center text-white text-center sm:text-left sm:items-start w-full sm:w-auto">
                <p className="font-semibold text-lg md:text-2xl">
                  <CountUp end={2800} duration={2} separator="." />+
                </p>
                <p className="font-normal text-sm md:text-base">Users Active</p>
              </div>
            </div>
        </div>

          {/* Right Content */}
          <div className="relative px-6 md:px-12 lg:px-16 flex items-center justify-center">
            <img
              src="images/backgrounds/HeroBg.png"
              className="w-full md:max-w-[800px] h-auto absolute -top-26 md:-top-32 right-0 z-0"
              alt="Background"
            />
            <img src="images/hero-people.png" className="w-3xl h-full -left-15 md:max-w-[600px] z-10 relative" alt="Hero" />
          </div>
        </section>

        {/* Section 2: Company List Slider */}
        <section className="py-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <h2 className="font-bold text-black text-xl md:text-2xl whitespace-nowrap">
                Trusted by <span className="inline md:block"><span className="font-normal text-base md:text-xl">100+ Company</span></span>
              </h2>
              <div className="flex overflow-hidden w-full whitespace-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]">
                <div className="flex animate-loop-scroll">
                  <img
                    src="images/ecotainment.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="Ecotainment"
                  />
                  <img
                    src="images/upala.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="Upala"
                  />
                  <img
                    src="images/umkmgo.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="UMKM Go"
                  />
                  <img
                    src="images/dpma.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="DPMA"
                  />
                </div>
                <div className="flex animate-loop-scroll" aria-hidden="true">
                  <img
                    src="images/ecotainment.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="Ecotainment"
                  />
                  <img
                    src="images/upala.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="Upala"
                  />
                  <img
                    src="images/umkmgo.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="UMKM Go"
                  />
                  <img
                    src="images/dpma.svg"
                    className="max-w-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
                    alt="DPMA"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 3: Youtube Introduction */}
        <section className="px-6 md:px-12 lg:px-16 py-10">
          <iframe
            className="w-full h-auto md:h-[560px] aspect-video bg-blue-500 border-4 border-blue-200 rounded-2xl md:rounded-3xl shadow-lg"
            src="https://www.youtube.com/embed/g4XCwjCpVIs"
            title="Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Section 4: Service */}
        <section className="relative grid grid-cols-1 lg:grid-cols-2 md:items-start justify-between gap-x-8 py-10">
          <img src="images/backgrounds/ServiceBg.png" className="w-full absolute top-0 z-0" alt="Service Background" />

          {/* Left Content */}
          <div className="relative px-6 md:px-12 lg:px-16 flex flex-col items-start gap-6">
            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-blue-500 font-semibold">Service</div>
            <h2 className="text-3xl md:text-4xl text-black font-medium leading-tight">
              Our services solve all your problems and needs.
            </h2>
            <p className="text-gray-600 max-w-xl">
              Kami menawarkan solusi kreatif dan teknologi untuk mendukung kebutuhan bisnis dan pengembangan skill Anda.
              Mulai dari jasa pembuatan website profesional, desain grafis & UI yang menarik, hingga pelatihan skill
              digital untuk mempersiapkan Anda menghadapi era teknologi yang terus berkembang.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-2">
                <img src="images/icons/blue-check.svg" alt="Check" className="mt-1" />
                <p>Profesional dan Terpercaya</p>
              </div>

              <div className="flex items-start gap-2">
                <img src="images/icons/blue-check.svg" alt="Check" className="mt-1" />
                <p>Pendekatan Fleksibel dan Adaptif</p>
              </div>

              <div className="flex items-start gap-2">
                <img src="images/icons/blue-check.svg" alt="Check" className="mt-1" />
                <p>Materi yang Sesuai dengan Kebutuhan Industri</p>
              </div>

              <div className="flex items-start gap-2">
                <img src="images/icons/blue-check.svg" alt="Check" className="mt-1" />
                <p>Dedikasi untuk Solusi Berkualitas</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative px-6 md:px-12 lg:px-16 py-8 h-full grid grid-cols-1 sm:grid-cols-2 justify-between gap-6">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex flex-grow">
                <div className="relative w-full h-full min-h-64 drop-shadow-[0_2px_2px_rgba(255,255,255,0.2)] rounded-b-2xl rounded-tr-2xl">
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top tab */}
                    <div className="grid grid-cols-2">
                      <div className="flex space-x-1 p-2 bg-white/60 rounded-t-2xl backdrop-blur-sm shadow-[0_-1px_4px_rgba(0,0,0,0.1)]">
                        <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                      </div>
                      <div className="bg-transparent" />
                    </div>

                    {/* Content (take remaining height) */}
                    <div className="shadow-md flex-1 flex flex-col justify-end p-6 pt-10 bg-white/60 backdrop-blur-sm rounded-b-2xl rounded-tr-2xl">
                      <div className="flex items-center justify-center h-14 w-14 p-3 rounded-full bg-blue-50 mb-3">
                        <img src="images/icons/JasaPembuatanWebsite.svg" className="size-8" alt="Website" />
                      </div>
                      <p className="font-bold text-lg">Jasa pembuatan Website Profesional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col">
                <div className="h-full flex flex-col md:flex-row items-start md:items-center gap-3 rounded-3xl bg-white/60 p-4 shadow-[0px_0px_4px_rgba(0,0,0,0.1),_0px_0px_4px_rgba(0,0,0,0.1),_0px_0px_4px_rgba(0,0,0,0.1)]">
                  <div className="w-fit">
                    <div className="flex items-center justify-center h-14 w-14 p-3 rounded-full bg-blue-50">
                      <img src="images/icons/JasaDesainGrafis.svg" className="size-8" alt="Design" />
                    </div>
                  </div>
                  <p className="font-bold text-lg">Desain Grafis & User Interface</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative flex flex-grow">
                <div className="relative w-full h-full min-h-64 rounded-b-2xl rounded-tr-2xl">
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top tab */}
                    <div className="grid grid-cols-2">
                      <div className="flex space-x-1 p-2 bg-blue-500 rounded-t-2xl">
                        <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                      </div>
                      <div className="bg-transparent" />
                    </div>

                    {/* Content with background image */}
                    <div className="shadow-md flex-3/4 flex flex-col justify-end bg-[url(/images/service-people.png)] bg-cover bg-right-top bg-no-repeat rounded-b-2xl rounded-tr-2xl bg-blue-500 p-6 pt-10">
                      <div className="w-fit z-10 mb-3">
                        <div className="flex items-center justify-center h-14 w-14 p-3 rounded-full bg-blue-50">
                          <img src="images/icons/JasaPelatihanSkill.svg" className="size-8" alt="Training" />
                        </div>
                      </div>
                      <p className="font-bold text-lg w-[60%] text-white z-10">Program Pelatihan Skill Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Event List */}
        <section className="px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-3">
              <img src="images/icons/UpcomingEvents.svg" className="size-7 md:size-8" alt="Events" />
              <h2 className="text-xl md:text-2xl font-semibold">Upcoming Events</h2>
            </div>
            <Link
              href="#"
              className="text-sm md:text-base flex items-center gap-2 text-blue-500 font-medium hover:border-b-2 hover:border-blue-500"
            >
              See all <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <Slider
            items={events}
            renderItem={(item, index) => (
              <div key={index} className="snap-start flex-shrink-0 p-2">
                <EventCard event={item} />
              </div>
            )}
          ></Slider>
        </section>

        {/* Section 6: Best Seller Course List */}
        <section className="px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-3">
              <img src="images/icons/BestSellerCourses.svg" className="size-7 md:size-8" alt="Courses" />
              <h2 className="text-xl md:text-2xl font-semibold">Best Seller Courses</h2>
            </div>
            <Link
              href="#"
              className="text-sm md:text-base flex items-center gap-2 text-blue-500 font-medium hover:border-b-2 hover:border-blue-500"
            >
              See all <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <Slider
            items={courses}
            renderItem={(item, index) => (
              <div key={index} className="snap-start flex-shrink-0 p-2">
                <CourseCard course={item} />
              </div>
            )}
          ></Slider>
        </section>

        {/* Section 7: Service Packages */}
        <section className="py-10">
          <ServicePackageSection servicePackages={servicePackages} />
        </section>

        {/* Section 8: CTA Mentor */}
        <section className="px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10">
          <div className="relative flex flex-col p-6 md:p-12 items-center justify-center gap-6 bg-gradient-to-r from-blue-700 to-[#2F81FF] rounded-xl overflow-hidden">
            {/* SVG decorative shape */}
            <svg
              className="absolute w-full h-auto -top-10 -left-10 z-0 mask-svg-fade"
              viewBox="0 0 1311 436"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 30C160.825 78.1436 350.02 203.989 195 322.22C1.22528 470.01 1484 441 1255 30"
                stroke="url(#paint0_linear_1460_713)"
                strokeWidth="63"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1460_713"
                  x1="644.554"
                  y1="30"
                  x2="644.554"
                  y2="403.632"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4082E6" />
                  <stop offset="1" stopColor="#9EC4FF" />
                </linearGradient>
              </defs>
            </svg>

            {/* Content above SVG */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                Tertarik Jadi Mentor di{" "}
                <span className="px-3 py-1 rounded-full text-blue-500 bg-blue-50">Kreavoks?</span>
              </h2>
              <p className="text-white text-center max-w-4xl">
                Bergabunglah dengan 100+ mentor lainnya untuk berkontribusi dan menciptakan dampak di komunitas IT
                Indonesia. Dapatkan manfaat seperti pendapatan bagi hasil, eksposur, dan akses ke proyek menarik.
              </p>
              <button className="hover:scale-105 transition duration-300 active:scale-95 select-none cursor-pointer inline-flex items-center bg-blue-50 rounded-full px-5 py-2.5 gap-3 text-blue-500 font-semibold">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </section>

        {/* Section 9: Testimonial */}
        <section className="px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Hear Testimonial</h2>
            <p className="text-xl md:text-2xl text-gray-600">2000+ Users Satisfied</p>
          </div>

          <div className="w-full py-4 flex flex-row items-stretch gap-4 overflow-x-auto hide-scrollbar">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
