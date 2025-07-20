"use client";

// External packages
import { useState, useEffect, useRef } from "react";
import { Head, Link, usePage, useForm } from "@inertiajs/react";
import CountUp from "react-countup";

// Layouts
import AppLayout from "@/layouts/app-layout";

// Types
import type {
    Course,
    Event,
    ServicePackage,
    Testimonial,
    SharedData,
    Mentor,
} from "@/types";

// Components
import Slider from "@/components/Slider";
import CourseCard from "@/components/cards/CourseCard";
import EventCard from "@/components/cards/EventCard";
import ServicePackageSection from "@/components/sections/ServicePackageSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import MentorCard from "@/components/cards/MentorCard";
import HeroLabels from "@/components/HeroLabels";

export default function Home() {
    <Head title="Kreavoks | Home" />;
    const { auth } = usePage<SharedData>().props;
    const { events } = usePage<SharedData & { events: Event[] }>().props;
    const { courses } = usePage<SharedData & { courses: Course[] }>().props;
    const { servicePackages } = usePage<
        SharedData & {
            servicePackages: Record<
                "Website" | "Mobile App" | "Design",
                ServicePackage[]
            >;
        }
    >().props;
    const { testimonials } = usePage<
        SharedData & { testimonials: Testimonial[] }
    >().props;
    const { mentors } = usePage<SharedData & { mentors: Mentor[] }>().props;
    const { post } = useForm();

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Refs for scroll animations
    const heroRef = useRef<HTMLDivElement>(null);
    const companiesRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const serviceRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement>(null);
    const coursesRef = useRef<HTMLDivElement>(null);
    const packagesRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const listMentorRef = useRef<HTMLDivElement>(null);
    const testimonialRef = useRef<HTMLDivElement>(null);

    const logout = () => {
        post("/logout");
    };

    const [animate, setAnimate] = useState(false);

    // Page load animation
    useEffect(() => {
        setIsPageLoaded(true);

        // Set up intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");

                        // ✅ Khusus untuk section mentor
                        if (entry.target === listMentorRef.current) {
                            setAnimate(true);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe elements
        const refs = [
            heroRef,
            companiesRef,
            videoRef,
            serviceRef,
            eventsRef,
            coursesRef,
            packagesRef,
            ctaRef,
            listMentorRef,
            testimonialRef,
        ];

        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <AppLayout>
            <Head title="Kreavoks" />
            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${
                    isPageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Section 1: Hero */}
                <section
                    ref={heroRef}
                    className="relative mb-8 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-0"
                >
                    {/* 1) Lapisan fading overlay full-width */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white pointer-events-none"></div>
                    {/* 2) Wrapper container untuk membatasi lebar konten */}
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 relative z-10">
                        {/* Left Content */}
                        <div className="px-6 md:px-12 lg:px-16 py-12 flex flex-col items-start gap-4">
                            <p className="text-blue-500 text-md md:text-base">
                                <span className="font-bold">No.1</span> Agensi
                                Digitalisasi dan Pemberdayaan Skill
                            </p>
                            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-black leading-tight transition-transform duration-700 hover:scale-105">
                                Masa Depan{" "}
                                <span className="text-blue-500">Digital</span>{" "}
                                Dimulai dari{" "}
                                <span className="text-blue-500">Sini</span>.
                            </h1>
                            <p className="text-gray-600 max-w-xl">
                                Bersama kami, ubah ide Anda menjadi solusi
                                kreatif yang relevan. Dari{" "}
                                <span className="font-medium">
                                    pembuatan software
                                </span>
                                , <span className="font-medium">desain UI</span>{" "}
                                hingga{" "}
                                <span className="font-medium">
                                    pelatihan skill digital
                                </span>
                                , kami siap membantu Anda untuk masa depan
                                teknologi.
                            </p>
                            <button className="flex items-center gap-2 mt-4 px-6 py-2 text-blue-500 font-semibold bg-blue-50 border border-blue-500 rounded-full hover:scale-105 transition duration-300 hover:shadow-md active:scale-95">
                                Get Started{" "}
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>

                            {/* Counter */}
                            <div className="px-8 py-4 mt-6 w-full flex flex-col sm:flex-row items-center justify-between bg-[url(/images/backgrounds/CounterBg.svg)] bg-cover rounded-xl gap-4 sm:gap-0">
                                <div className="flex flex-col items-center text-white text-center sm:text-left sm:items-start sm:border-none border-b border-white/30 pb-4 sm:pb-0 sm:mb-0 w-full sm:w-auto">
                                    <p className="font-semibold text-lg md:text-2xl">
                                        <CountUp end={100} duration={3} />+
                                    </p>
                                    <p className="font-normal text-sm md:text-base">
                                        Projects
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-white text-center sm:text-left sm:items-start sm:border-none border-b border-white/30 pb-4 sm:pb-0 sm:mb-0 w-full sm:w-auto">
                                    <p className="font-semibold text-lg md:text-2xl">
                                        <CountUp end={200} duration={3} />+
                                    </p>
                                    <p className="font-normal text-sm md:text-base">
                                        Courses
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-white text-center sm:text-left sm:items-start w-full sm:w-auto">
                                    <p className="font-semibold text-lg md:text-2xl">
                                        <CountUp
                                            end={2800}
                                            duration={3}
                                            separator="."
                                        />
                                        +
                                    </p>
                                    <p className="font-normal text-sm md:text-base">
                                        Users Active
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content: gambar full-width di dalam container */}
                        <div className="relative px-6 md:px-12 lg:px-16 flex items-center justify-center">
                            {/* Background image absolute - no animation */}
                            <img
                                src="/images/backgrounds/HeroBg.png"
                                alt="Background"
                                className="absolute -top-32 right-0 w-full md:max-w-[800px] h-auto"
                            />
                            {/* Hero foreground image */}
                            <img
                                src="/images/hero-people.png"
                                alt="Hero"
                                className="relative w-full md:max-w-[600px] h-auto -left-16 animate-float"
                            />
                            <HeroLabels />
                        </div>
                    </div>
                </section>

                {/* New Section: Collaboration in Unity */}
                <section className="relative bg-blue-50 py-12 z-[1]">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                        <h2 className="text-[38px] font-semibold text-gray-800 mb-12">
                            Kolaborasi Dalam Kesatuan
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <img
                                src="/images/bank-sinarmas-logo.svg"
                                alt="Bank Sinarmas"
                                className="h-12"
                            />
                            <img
                                src="/images/bank-sinarmas-logo.svg"
                                alt="Bank Sinarmas"
                                className="h-12"
                            />
                            <img
                                src="/images/bank-sinarmas-logo.svg"
                                alt="Bank Sinarmas"
                                className="h-12"
                            />

                            <img
                                src="/images/ipb-university-logo.svg"
                                alt="IPB University"
                                className="h-12"
                            />
                            <img
                                src="/images/ipb-university-logo.svg"
                                alt="IPB University"
                                className="h-12"
                            />
                            <img
                                src="/images/ipb-university-logo.svg"
                                alt="IPB University"
                                className="h-12"
                            />
                            <img
                                src="/images/ipb-university-logo.svg"
                                alt="IPB University"
                                className="h-12"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2: Company List Slider */}
                <section ref={companiesRef} className="py-10 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                            <h2 className="font-bold text-black text-xl md:text-2xl whitespace-nowrap">
                                Trusted by{" "}
                                <span className="inline md:block">
                                    <span className="font-normal text-base md:text-xl">
                                        100+ Company
                                    </span>
                                </span>
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
                                <div
                                    className="flex animate-loop-scroll"
                                    aria-hidden="true"
                                >
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
                <section
                    ref={videoRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-10 opacity-0"
                >
                    <iframe
                        className="w-full h-auto md:h-[560px] aspect-video bg-blue-500 border-4 border-blue-200 rounded-2xl md:rounded-3xl shadow-lg transition-transform duration-500 hover:scale-[1.01] hover:shadow-xl"
                        src="https://www.youtube.com/embed/g4XCwjCpVIs"
                        title="Introduction Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </section>

                {/* Section 4: Service */}
                <section
                    ref={serviceRef}
                    className="relative grid grid-cols-1 md:items-start justify-between gap-x-8 py-10 opacity-0"
                >
                    <img
                        src="images/backgrounds/ServiceBg.png"
                        className="w-full absolute top-0 z-0"
                        alt="Service Background"
                    />
                    {/* Konten */}
                    <div className="container mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:items-start">
                        {/* Left Content */}
                        <div className="relative px-6 md:px-12 lg:px-16 flex flex-col items-start gap-6">
                            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-blue-500 font-semibold">
                                Service
                            </div>
                            <h2 className="text-3xl md:text-4xl text-black font-medium leading-tight transition-transform duration-500 hover:translate-x-2">
                                Our services solve all your problems and needs.
                            </h2>
                            <p className="text-gray-600 max-w-xl">
                                Kami menawarkan solusi kreatif dan teknologi
                                untuk mendukung kebutuhan bisnis dan
                                pengembangan skill Anda. Mulai dari jasa
                                pembuatan website profesional, desain grafis &
                                UI yang menarik, hingga pelatihan skill digital
                                untuk mempersiapkan Anda menghadapi era
                                teknologi yang terus berkembang.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                                    <img
                                        src="images/icons/blue-check.svg"
                                        alt="Check"
                                        className="mt-1"
                                    />
                                    <p>Profesional dan Terpercaya</p>
                                </div>

                                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                                    <img
                                        src="images/icons/blue-check.svg"
                                        alt="Check"
                                        className="mt-1"
                                    />
                                    <p>Pendekatan Fleksibel dan Adaptif</p>
                                </div>

                                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                                    <img
                                        src="images/icons/blue-check.svg"
                                        alt="Check"
                                        className="mt-1"
                                    />
                                    <p>
                                        Materi yang Sesuai dengan Kebutuhan
                                        Industri
                                    </p>
                                </div>

                                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                                    <img
                                        src="images/icons/blue-check.svg"
                                        alt="Check"
                                        className="mt-1"
                                    />
                                    <p>Dedikasi untuk Solusi Berkualitas</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="relative px-6 md:px-12 lg:px-16 py-8 h-full grid grid-cols-1 sm:grid-cols-2 justify-between gap-6">
                            <div className="flex flex-col justify-between h-full gap-6">
                                <div className="flex flex-grow">
                                    <div className="relative w-full h-full min-h-64 drop-shadow-[0_2px_2px_rgba(255,255,255,0.2)] rounded-b-2xl rounded-tr-2xl transition-transform duration-500 hover:scale-105 hover:shadow-lg">
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
                                                    <img
                                                        src="images/icons/JasaPembuatanWebsite.svg"
                                                        className="size-8"
                                                        alt="Website"
                                                    />
                                                </div>
                                                <p className="font-bold text-lg">
                                                    Jasa pembuatan Website
                                                    Profesional
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex flex-col">
                                    <div className="h-full flex flex-col md:flex-row items-start md:items-center gap-3 rounded-3xl bg-white/60 p-4 shadow-[0px_0px_4px_rgba(0,0,0,0.1),_0px_0px_4px_rgba(0,0,0,0.1),_0px_0px_4px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                                        <div className="w-fit">
                                            <div className="flex items-center justify-center h-14 w-14 p-3 rounded-full bg-blue-50">
                                                <img
                                                    src="images/icons/JasaDesainGrafis.svg"
                                                    className="size-8"
                                                    alt="Design"
                                                />
                                            </div>
                                        </div>
                                        <p className="font-bold text-lg">
                                            Desain Grafis & User Interface
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="relative flex flex-grow">
                                    <div className="relative w-full h-full min-h-64 rounded-b-2xl rounded-tr-2xl transition-transform duration-500 hover:scale-105 hover:shadow-lg">
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
                                                        <img
                                                            src="images/icons/JasaPelatihanSkill.svg"
                                                            className="size-8"
                                                            alt="Training"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="font-bold text-lg w-[60%] text-white z-10">
                                                    Program Pelatihan Skill
                                                    Digital
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Promo */}
                <section className="relative bg-white py-16 overflow-hidden w-full">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-16 relative z-10">
                        {/* Left - Promo Image */}
                        <div className="w-full flex justify-center md:justify-start">
                            <img
                                src="/images/uiux-event-card.png"
                                alt="Promo Kreavoks UI/UX Event"
                                className="w-full max-w-[500px] rounded-3xl shadow-lg"
                            />
                        </div>

                        {/* Right - Text & Countdown */}
                        <div className="flex flex-col items-start gap-5">
                            {/* Countdown Timer */}
                            <div className="flex justify-center md:justify-start items-center gap-3 text-center text-sm md:text-base font-semibold flex-wrap w-full">
                                {[
                                    "13 Hari",
                                    "8 Jam",
                                    "12 Menit",
                                    "3 Detik",
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-xl px-4 py-3 shadow text-blue-900 min-w-[60px]"
                                    >
                                        <p className="text-2xl md:text-2xl font-bold">
                                            {item.split(" ")[0]}
                                        </p>
                                        <p className="text-sm md:text-sm">
                                            {item.split(" ")[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Headline */}
                            <h2 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-300">
                                Penawaran Menarik Nih Buat Kamu dari Kreavoks
                            </h2>

                            {/* Subtext */}
                            <p className="text-gray-600 text-[18px] w-full">
                                Tunggu apa lagi? Ambil kesempatan emas ini
                                sekarang juga!
                            </p>

                            {/* Promo Code */}
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-[20px] text-gray-700">
                                        Gunakan kode promo dan dapatkan diskon
                                        hingga
                                    </p>

                                    {/* Diskon */}
                                    <div className="bg-blue-500 text-yellow-200 w-[80px]     h-[60px] rounded-full flex items-center justify-center font-bold text-[20px] shrink-0">
                                        20%
                                    </div>
                                </div>

                                {/* Kode promo - Click to copy */}
                                <div
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            "KREAVOKSDIGITAL"
                                        );
                                        alert("Kode promo disalin!");
                                    }}
                                    className="cursor-pointer flex items-center gap-2 border-2 border-dashed border-gray-400 text-gray-700 px-4 py-3 rounded-2xl font-semibold text-base max-w-max mx-auto md:mx-0 transition hover:bg-gray-50"
                                >
                                    {/* Icon Copy */}
                                    <div className="bg-white p-1 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6a2 2 0 012-2z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-lg md:text-base">
                                        KREAVOKSDIGITAL
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Gradasi Blur */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30 z-0" />
                </section>

                {/* Section 5: Event List */}
                <section
                    ref={eventsRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10 opacity-0"
                >
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-3">
                            <img
                                src="images/icons/UpcomingEvents.svg"
                                className="size-7 md:size-8"
                                alt="Events"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Upcoming Events
                            </h2>
                        </div>
                        <Link
                            href="/program"
                            className="text-sm md:text-base flex items-center gap-2 text-blue-500 font-medium hover:border-b-2 hover:border-blue-500 transition-all duration-300"
                        >
                            See all{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>

                    <Slider
                        items={events}
                        renderItem={(item, index) => <EventCard event={item} />}
                    />
                </section>

                {/* Section 6: Best Seller Course List */}
                <section
                    ref={coursesRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10 opacity-0"
                >
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-3">
                            <img
                                src="images/icons/BestSellerCourses.svg"
                                className="size-7 md:size-8"
                                alt="Courses"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Best Seller Courses
                            </h2>
                        </div>
                        <Link
                            href="/program"
                            className="text-sm md:text-base flex items-center gap-2 text-blue-500 font-medium hover:border-b-2 hover:border-blue-500 transition-all duration-300"
                        >
                            See all{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>

                    <Slider
                        items={courses}
                        renderItem={(item, index) => (
                            <CourseCard course={item} />
                        )}
                    />
                </section>

                {/* Section 7: Service Packages */}
                <section ref={packagesRef} className="py-10 opacity-0">
                    <div className="mx-auto">
                        <ServicePackageSection
                            servicePackages={servicePackages}
                        />
                    </div>
                </section>

                {/* Section 8: CTA Mentor */}
                <section
                    ref={ctaRef}
                    className="px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10 opacity-0"
                >
                    <div className="relative flex flex-col p-6 md:p-12 items-center justify-center gap-6 bg-gradient-to-r from-blue-700 to-[#2F81FF] rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.01] hover:shadow-xl">
                        {/* SVG decorative shape */}
                        <svg
                            className="absolute w-full h-auto -top-10 -left-10 z-0 mask-svg-fade animate-pulse-slow"
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
                                <span className="px-3 py-1 rounded-full text-blue-500 bg-blue-50">
                                    Kreavoks?
                                </span>
                            </h2>
                            <p className="text-white text-center max-w-4xl">
                                Bergabunglah dengan 100+ mentor lainnya untuk
                                berkontribusi dan menciptakan dampak di
                                komunitas IT Indonesia. Dapatkan manfaat seperti
                                pendapatan bagi hasil, eksposur, dan akses ke
                                proyek menarik.
                            </p>
                            <button className="hover:scale-105 transition duration-300 active:scale-95 select-none cursor-pointer inline-flex items-center bg-blue-50 rounded-full px-5 py-2.5 gap-3 text-blue-500 font-semibold hover:shadow-lg">
                                Gabung Sekarang
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section 9: List Mentor */}
                <section
                    ref={listMentorRef}
                    className="px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10 opacity-0"
                >
                    {/* Gradient animasi */}
                    <div
                        className={`absolute inset-0 z-0 transition-all duration-[2000ms] ease-out
                        bg-gradient-to-b from-[#2F81FF]/50 via-transparent to-transparent
                        ${
                            animate
                                ? "animate-expandGradientX"
                                : "opacity-0 scale-x-0 origin-center"
                        }
                    `}
                    />

                    <div className="container mx-auto relative mt-12 z-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Mentor di Kreavoks
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Pilih mentor favoritmu, pelajari dari pengalaman
                            mereka, dan eksplorasi project bareng.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            {mentors?.length > 0 ? (
                                mentors.map((mentor, i) => (
                                    <MentorCard
                                        key={mentor.id || i}
                                        mentor={mentor}
                                    />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-500">
                                    Belum ada mentor tersedia saat ini.
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Section 10: Testimonial */}
                <section
                    ref={testimonialRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-12 w-full flex flex-col gap-6 z-10 opacity-0"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Hear Testimonial
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600">
                            100+ Users Satisfied
                        </p>
                    </div>

                    <TestimonialSlider testimonials={testimonials} />
                </section>
            </div>
        </AppLayout>
    );
}
