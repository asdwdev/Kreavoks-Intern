"use client"

import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import type { SharedData } from "@/types"
import { useEffect, useRef, useState } from "react"

type member = {
    id: string
    name: string
    position: string
    image: string
    social: {
        linkedin: string
        twitter: string
        instagram: string
    }
}

export default function About() {
    <Head title="Kreavoks | About" />
    const { auth } = usePage<SharedData>().props

    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "Setiady Ibrahim Anwar",
            position: "CEO & Founder",
            image: "/images/team/setiady.webp",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
        },
        {
            id: 2,
            name: "Adli Farizi",
            position: "Chief Technology Officer",
            image: "/images/team/adli.webp",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
        },
        {
            id: 3,
            name: "Muhammad Farhan Fahrezy",
            position: "Chief Marketing Officer",
            image: "/images/team/farhan.webp",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
        },
        {
            id: 4,
            name: "Alya Putri Salsabila",
            position: "Chief Operating Officer",
            image: "/images/team/alya.webp",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
        },
        {
            id: 5,
            name: "Muthia Nurul S",
            position: "Chief Financial Officer",
            image: "/images/team/muthia.webp",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
        },
    ]

    // Company stats
    const stats = [
        { id: 1, value: "5+", label: "Tahun Pengalaman" },
        { id: 2, value: "100+", label: "Proyek Selesai" },
        { id: 3, value: "50+", label: "Klien Puas" },
        { id: 4, value: "2,800+", label: "Peserta Kursus" },
    ]

    const [isPageLoaded, setIsPageLoaded] = useState(false)

    // Refs for scroll animations
    const heroRef = useRef<HTMLDivElement>(null)
    const storyRef = useRef<HTMLDivElement>(null)
    const missionVisionRef = useRef<HTMLDivElement>(null)
    const advantagesRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    // Page load animation
    useEffect(() => {
        setIsPageLoaded(true)

        // Set up intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in")
                    }
                })
            },
            { threshold: 0.1 },
        )

        // Observe elements
        const refs = [
            heroRef,
            storyRef,
            missionVisionRef,
            advantagesRef,
            statsRef,
            teamRef,
            ctaRef,
        ]

        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current)
        })

        return () => {
            refs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current)
            })
        }
    }, [])

    return (
        <AppLayout>
            <Head title="About Us - Kreavoks" />
            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${isPageLoaded ? "opacity-100" : "opacity-0"}`}
            >
                {/* Hero Section */}
                <section ref={heroRef} className="relative py-20 overflow-hidden bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-0">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white pointer-events-none"></div>

                    {/* Circular accent */}
                    <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-blue-500/10 animate-wander-3"></div>
                    <div className="absolute right-20 bottom-10 w-24 h-24 rounded-full bg-yellow-300/20 animate-wander-2"></div>

                    <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Tentang <span className="text-blue-500">Kreavoks</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Kami adalah agensi digital yang berdedikasi untuk membantu bisnis dan individu mengembangkan kehadiran
                                digital mereka dan meningkatkan keterampilan teknologi untuk masa depan.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section ref={storyRef} className="py-16 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="relative">
                                    <div className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-yellow-300/30 z-0"></div>
                                    <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-blue-500/20 z-0"></div>
                                    <img
                                        src="/images/sv.png"
                                        alt="Kreavoks Office"
                                        className="relative z-10 w-full h-auto rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
                                <p className="text-gray-700 mb-4">
                                    Kreavoks didirikan pada tahun 2024 dengan visi membuat teknologi digital lebih mudah
                                    diakses dan dipahami oleh semua orang. Kami percaya bahwa transformasi digital seharusnya tidak rumit
                                    dan dapat dimanfaatkan oleh bisnis dari segala ukuran.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Berawal dari tim kecil yang bersemangat, kami telah berkembang menjadi agensi digital terkemuka yang
                                    menyediakan layanan pengembangan software, desain UI/UX, dan pelatihan keterampilan digital yang
                                    komprehensif.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    Nama "Kreavoks" berasal dari gabungan kata "Kreasi" dan "Vokasi" - mencerminkan komitmen kami untuk
                                    menggabungkan kreativitas dengan pendidikan praktis untuk menciptakan solusi digital yang inovatif.
                                </p>

                                <div className="flex items-center gap-4">
                                    <img src="/images/team/setiady.png" alt="Founder" className="w-16 h-16 rounded-full object-cover object-top" />
                                    <div>
                                        <h4 className="font-semibold">Setiay Ibrahim Anwar</h4>
                                        <p className="text-gray-600">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section ref={missionVisionRef} className="py-16 bg-blue-50 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold mb-4">Misi & Visi Kami</h2>
                            <p className="text-gray-700">
                                Kami berkomitmen untuk memberikan solusi digital terbaik dan pendidikan yang berkualitas
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24">
                                    <div className="absolute top-0 right-0 w-full h-full bg-blue-500/10 rounded-bl-full"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                                        <i className="fa-solid fa-bullseye text-2xl text-blue-500"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Misi</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <i className="fa-solid fa-check text-blue-500 mt-1"></i>
                                            <p>Menyediakan solusi digital yang inovatif dan berkualitas tinggi</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="fa-solid fa-check text-blue-500 mt-1"></i>
                                            <p>Memberdayakan individu dan bisnis melalui pendidikan digital yang praktis</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="fa-solid fa-check text-blue-500 mt-1"></i>
                                            <p>Menciptakan ekosistem digital yang inklusif dan dapat diakses oleh semua</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="fa-solid fa-check text-blue-500 mt-1"></i>
                                            <p>Mendorong inovasi dan kreativitas dalam setiap proyek yang kami kerjakan</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24">
                                    <div className="absolute top-0 right-0 w-full h-full bg-yellow-300/10 rounded-bl-full"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-yellow-300/10 rounded-full flex items-center justify-center mb-6">
                                        <i className="fa-solid fa-eye text-2xl text-yellow-500"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Visi</h3>
                                    <p className="text-gray-700 mb-4">
                                        Menjadi pemimpin dalam transformasi digital di Indonesia dengan menyediakan solusi teknologi yang
                                        inovatif dan pendidikan digital yang berkualitas.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        Kami membayangkan masa depan di mana setiap bisnis dan individu memiliki akses ke alat dan
                                        pengetahuan digital yang mereka butuhkan untuk berkembang di era digital.
                                    </p>
                                    <p className="text-gray-700">
                                        Dengan fokus pada kualitas, inovasi, dan pendidikan, kami bertujuan untuk memberdayakan generasi
                                        berikutnya dari profesional digital Indonesia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Advantages */}
                <section ref={advantagesRef} className="py-16 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold mb-4">Keunggulan Kami</h2>
                            <p className="text-gray-700">Apa yang membuat Kreavoks berbeda dari yang lain</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                                    <i className="fa-solid fa-code text-xl text-blue-500"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Teknologi Terkini</h3>
                                <p className="text-gray-600">
                                    Kami selalu menggunakan teknologi terbaru dan terbaik untuk setiap proyek yang kami kerjakan.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
                                <div className="w-14 h-14 bg-yellow-300/10 rounded-full flex items-center justify-center mb-4">
                                    <i className="fa-solid fa-users text-xl text-yellow-500"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Tim Profesional</h3>
                                <p className="text-gray-600">
                                    Tim kami terdiri dari profesional berpengalaman dengan keahlian di berbagai bidang digital.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                                    <i className="fa-solid fa-graduation-cap text-xl text-blue-500"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Kurikulum Terstruktur</h3>
                                <p className="text-gray-600">
                                    Program pelatihan kami dirancang dengan kurikulum yang terstruktur dan sesuai kebutuhan industri.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
                                <div className="w-14 h-14 bg-yellow-300/10 rounded-full flex items-center justify-center mb-4">
                                    <i className="fa-solid fa-headset text-xl text-yellow-500"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Dukungan Penuh</h3>
                                <p className="text-gray-600">
                                    Kami memberikan dukungan penuh kepada klien dan peserta kursus kami sepanjang perjalanan mereka.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section ref={statsRef} className="py-16 bg-blue-500 text-white opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.id} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-blue-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section ref={teamRef} className="py-16 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
                            <p className="text-gray-700">Kenali orang-orang hebat di balik Kreavoks</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] group">
                                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                                        <img
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-full h-full object-top object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full flex justify-center">
                                                <div className="flex gap-4">
                                                    <a href={member.social.linkedin} className="text-white hover:text-blue-300">
                                                        <i className="fa-brands fa-linkedin text-lg"></i>
                                                    </a>
                                                    <a href={member.social.twitter} className="text-white hover:text-blue-300">
                                                        <i className="fa-brands fa-twitter text-lg"></i>
                                                    </a>
                                                    <a href={member.social.instagram} className="text-white hover:text-blue-300">
                                                        <i className="fa-brands fa-instagram text-lg"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold">{member.name}</h3>
                                        <p className="text-gray-600">{member.position}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section ref={ctaRef} className="py-16 bg-gray-50 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            {/* Yellow circle accent */}
                            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-yellow-300/30"></div>
                            <div className="absolute left-1/2 bottom-0 w-24 h-24 rounded-full bg-blue-400/30"></div>

                            <div className="relative z-10 max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Bekerja Sama dengan Kami?</h2>
                                <p className="text-blue-50 mb-8 text-lg">
                                    Hubungi kami untuk mendiskusikan bagaimana Kreavoks dapat membantu bisnis atau karir digital Anda.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-6 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-full hover:bg-yellow-400 cursor-pointer hover:scale-[1.02] transition duration-300">
                                        <i className="fa-solid fa-envelope mr-2"></i> Hubungi Kami
                                    </button>
                                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 cursor-pointer hover:scale-[1.02] transition duration-300">
                                        Lihat Layanan Kami
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
