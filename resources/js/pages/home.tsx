// External packages
import { useState } from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';

// Layouts
import AppLayout from '@/layouts/app-layout';

// Types
import { Course, Event, ServicePackage, Testimonial, type SharedData } from '@/types';

// Components
import Slider from '@/components/Slider';
import CourseCard from '@/components/cards/CourseCard';
import EventCard from '@/components/cards/EventCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import ServicePackageSection from '@/components/sections/ServicePackageSection';

export default function Home() {
    const { auth } = usePage<SharedData>().props;
    const { events } = usePage<SharedData & { events: Event[] }>().props;
    const { courses } = usePage<SharedData & { courses: Course[] }>().props;
    const { servicePackages } = usePage<SharedData & { servicePackages: Record<"Website" | "Mobile App" | "Design", ServicePackage[]> }>().props;
    const { testimonials } = usePage<SharedData & { testimonials: Testimonial[] }>().props;
    const { post } = useForm();

    const [selectedCategory, setSelectedCategory] = useState<"Website" | "Mobile App" | "Design">("Website");

    const logout = () => {
        post('/logout');
    };

    return (
        <AppLayout>
            <Head title="Kreavoks" />
            <div className="flex min-h-screen flex-col bg-white text-black">

                {/* Section 1: Hero */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 md:items-center justify-between gap-8 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]">

                    {/* Pseudo-element untuk efek fading */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white pointer-events-none"></div>

                    {/* Left Content */}
                    <div className="relative p-5 md:p-8 flex flex-col items-start gap-2 ">

                        <p className="z-10 text-blue-500 text-sm md:text-base">No.1 agensi Digitalisasi dan Pemberdayaan Skill</p>
                        <p className="z-10 text-3xl md:text-5xl lg:text-7xl font-bold text-black">Masa Depan Digital Dimulai dari Sini.</p>
                        <p className="z-10 text-gray-400">Bersama kami, ubah ide Anda menjadi solusi kreatif yang relevan. Dari pembuatan software, desain UI hingga pelatihan skill digital, kami siap membantu Anda untuk masa depan teknologi.</p>

                        <button className="hover:scale-105 transition duration-300 cursor-pointer z-10 px-4 py-1 text-blue-500 font-semibold bg-blue-50 border border-blue-500 rounded-full">
                            Get Started <i className="fa-solid fa-arrow-right"></i>
                        </button>

                        {/* Counter */}
                        <div className="z-10 px-6 py-2 mt-6 w-full flex items-center justify-between bg-[url(/images/backgrounds/CounterBg.svg)] bg-cover rounded-xl">
                            <div className="text-left text-white">
                                <p className="font-semibold text-lg md:text-xl">100+</p>
                                <p className="font-normal text-sm md:text-base">Projects</p>
                            </div>

                            <div className="text-left text-white">
                                <p className="font-semibold text-lg md:text-xl">200+</p>
                                <p className="font-normal text-sm md:text-base">Courses</p>
                            </div>

                            <div className="text-left text-white">
                                <p className="font-semibold text-lg md:text-xl">2.8k+</p>
                                <p className="font-normal text-sm md:text-base">Users Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative p-5 md:p-8 flex items-center justify-center bg-white">
                        <img src="images/backgrounds/HeroBg.png" className="w-full h-[140%] absolute -top-15 z-0"></img>
                        <img src="images/hero-people.png" className="w-full h-full z-10"></img>
                    </div>
                </div>

                {/* Section 2: Company List Slider */}
                <div className="relative p-5 md:p-8 flex flex-row items-center justify-center gap-2">
                    <p className="font-bold text-black text-xl md:text-2xl">Trusted by
                        <span className="font-normal text-base md:text-xl"> 100+ Company
                        </span>
                    </p>

                    <div className="flex overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]">
                        <div className="flex animate-loop-scroll">
                            <img src="images/ecotainment.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                            <img src="images/upala.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                            <img src="images/umkmgo.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                            <img src="images/dpma.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                        </div>
                        <div className="flex animate-loop-scroll" aria-hidden="true">
                            <img src="images/ecotainment.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                            <img src="images/upala.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                            <img src="images/umkmgo.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                            <img src="images/dpma.svg" className="max-w-none mx-4 grayscale hover:grayscale-0"></img>
                        </div>
                    </div>
                </div>

                {/* Section 3: Youtube Introduction */}
                <div className="p-5 md:p-8 w-full ">
                    <iframe className="w-full aspect-4/3 md:aspect-16/4 bg-blue-500 border-4 border-blue-200 rounded-2xl md:rounded-4xl" src=""></iframe>
                </div>

                {/* Section 4: Service */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 md:items-start justify-between gap-x-8">
                    <img src="images/backgrounds/ServiceBg.png" className="w-full absolute top-0 z-0"></img>
                    {/* Left Content */}
                    <div className="relative p-5 md:p-8 flex flex-col items-start gap-2">
                        <div className="px-3 py-1 bg-blue-50 rounded-full text-blue-500 font-semibold">Service</div>
                        <p className="text-3xl md:text-4xl text-black font-medium">Our services solve all your problems and needs.</p>
                        <p className=" text-gray-400">Kami menawarkan solusi kreatif dan teknologi untuk mendukung kebutuhan bisnis dan pengembangan skill Anda. Mulai dari jasa pembuatan website profesional, desain grafis & UI yang menarik, hingga pelatihan skill digital untuk mempersiapkan Anda menghadapi era teknologi yang terus berkembang.</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-start gap-1">
                                <img src="images/icons/blue-check.svg"></img>
                                <p>Profesional dan Terpercaya</p>
                            </div>

                            <div className="flex items-start gap-1">
                                <img src="images/icons/blue-check.svg"></img>
                                <p>Pendekatan Fleksibel dan Adaptif</p>
                            </div>

                            <div className="flex items-start gap-1">
                                <img src="images/icons/blue-check.svg"></img>
                                <p>Materi yang Sesuai dengan Kebutuhan Industri</p>
                            </div>

                            <div className="flex items-start gap-1">
                                <img src="images/icons/blue-check.svg"></img>
                                <p>Dedikasi untuk Solusi Berkualitas</p>
                            </div>
                        </div>

                    </div>
                    {/* Right Content */}
                    <div className="relative p-5 md:p-8 h-full grid grid-cols-2 justify-between gap-4">
                        <div className="flex flex-col justify-between h-full gap-4">

                            <div className="flex flex-grow">
                                <div className="relative w-full h-full min-h-64 drop-shadow-[0_2px_2px_rgba(255,255,255,0.2)] rounded-b-2xl rounded-tr-2xl">
                                    {/* Konten */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* tab atas */}
                                        <div className="grid grid-cols-2 ">
                                            <div className="flex space-x-1 p-2 bg-white/60 rounded-t-2xl backdrop-blur-sm shadow-[0_-1px_4px_rgba(0,0,0,0.1)]">
                                                <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                                                <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
                                                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                                            </div>
                                            <div className="bg-transparent" />
                                        </div>

                                        {/* isi konten (ambil sisa tinggi) */}
                                        <div className="shadow-md flex-1 flex flex-col justify-end p-4 pt-10 bg-white/60 backdrop-blur-sm rounded-b-2xl rounded-tr-2xl">
                                            <div className="flex items-center justify-center h-12 w-12 p-2 rounded-full bg-blue-50 mb-2">
                                                <img src="images/icons/JasaPembuatanWebsite.svg" className="size-7"></img>
                                            </div>
                                            <p className="font-bold">Jasa pembuatan Website Profesional</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col">
                                <div className="h-full flex flex-col md:flex-row items-start md:items-center gap-2 rounded-3xl bg-white/60 p-3 shadow-[0px_0px_4px_rgba(0,0,0,0.1),_0px_0px_4px_rgba(0,0,0,0.1),_0px_0px_4px_rgba(0,0,0,0.1)]">
                                    <div className="w-fit">
                                        <div className="flex items-center justify-center h-12 w-12 p-2 rounded-full bg-blue-50">
                                            <img src="images/icons/JasaDesainGrafis.svg" className="size-7"></img>
                                        </div>
                                    </div>
                                    <p className="font-bold">Desain Grafis & User Interface</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col ">
                            <div className="relative flex flex-grow">
                                <div className="relative w-full h-full min-h-64 rounded-b-2xl rounded-tr-2xl">
                                    {/* Konten */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Tab atas */}
                                        <div className="grid grid-cols-2">
                                            <div className="flex space-x-1 p-2 bg-blue-500 rounded-t-2xl">
                                                <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                                                <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
                                                <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                            </div>
                                            <div className="bg-transparent" />
                                        </div>

                                        {/* Konten dengan gambar background */}
                                        <div className="shadow-md flex-1 flex flex-col justify-end bg-[url(/images/service-people.png)] bg-cover bg-right-top bg-no-repeat rounded-b-2xl rounded-tr-2xl bg-blue-500 p-4 pt-10">
                                            <div className="w-fit z-10 mb-2">
                                                <div className="flex items-center justify-center h-12 w-12 p-2 rounded-full bg-blue-50 mb-2">
                                                    <img src="images/icons/JasaPelatihanSkill.svg" className="size-7"></img>
                                                </div>
                                            </div>
                                            <p className="font-bold w-[60%] text-white z-10">Program Pelatihan Skill Digital</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Event List */}
                <div className="p-5 md:p-8 w-full flex flex-col gap-4 z-10">
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2">
                            <img src="images/icons/UpcomingEvents.svg" className="size-7 md:size-8"></img>
                            <p className="text-lg md:text-2xl font-semibold">Upcoming Events</p>
                        </div>
                        <Link href="#" className="text-sm md:text-base flex items-center gap-2 text-blue-500 font-medium hover:border-b-2 hover:border-blue-500">See all <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>

                    <Slider
                        items={events}
                        renderItem={(item, index) => (
                            <div key={index} className="snap-start flex-shrink-0 p-2">
                                <EventCard event={item} />
                            </div>
                        )}>
                    </Slider>
                </div>

                {/* Section 6: Best Seller Course List */}
                <div className="p-5 md:p-8 w-full flex flex-col gap-4 z-10">
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2">
                            <img src="images/icons/BestSellerCourses.svg" className="size-7 md:size-8"></img>
                            <p className="text-lg md:text-2xl font-semibold">Best Seller Courses</p>
                        </div>
                        <Link href="#" className="text-sm md:text-base flex items-center gap-2 text-blue-500 font-medium hover:border-b-2 hover:border-blue-500">See all <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>

                    <Slider
                        items={courses}
                        renderItem={(item, index) => (
                            <div key={index} className="snap-start flex-shrink-0 p-2">
                                <CourseCard course={item} />
                            </div>
                        )}>
                    </Slider>
                </div>

                {/* Section 6: Paket Jasa */}
                <ServicePackageSection servicePackages={servicePackages}/>

                {/* Section 7: CTA Mentor */}
                <div className="p-5 md:p-8 w-full flex flex-col gap-4 z-10">
                    <div className="relative flex flex-col p-4 md:p-12 items-center justify-center gap-4 bg-linear-to-r from-blue-700 to-[#2F81FF] rounded-xl overflow-hidden ">

                        {/* SVG bentuk dekoratif */}
                        <svg
                            className="absolute w-full h-auto -top-10 -left-10 z-0  mask-svg-fade"
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

                        {/* Konten di atas SVG */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                            <h2 className="text-2xl font-bold text-white text-center">
                                Tertarik Jadi Mentor di{" "}
                                <span className="px-2 py-0.5 rounded-full text-blue-500 bg-blue-50">
                                    Kreavoks?
                                </span>
                            </h2>
                            <p className="text-white text-center max-w-4xl">
                                Bergabunglah dengan 100+ mentor lainnya untuk berkontribusi dan menciptakan
                                dampak di komunitas IT Indonesia. Dapatkan manfaat seperti pendapatan bagi
                                hasil, eksposur, dan akses ke proyek menarik.
                            </p>
                            <div className="hover:scale-105 transition duration-300 active:scale-95 select-none cursor-pointer inline-flex items-center bg-blue-50 rounded-full px-3 py-2 gap-3 text-blue-500 font-semibold">
                                Gabung Sekarang
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section 8: Testimonial */}
                <div className="p-5 md:p-8 w-full flex flex-col gap-4 z-10">
                    <div>
                        <p className="text-2xl font-semibold">Hear Testimonial</p>
                        <p className="text-2xl">2000+ Users Satisfied</p>
                    </div>

                    <div className="w-full py-3 flex flex-row items-stretch gap-3 overflow-x-auto hide-scrollbar">
                        {testimonials.map((item) => (
                            <TestimonialCard key={item.id} testimonial={item} />
                        ))}
                    </div>
                </div>

                {/* Delete nanti */}
                {/* <nav className="mt-4 flex flex-col items-center gap-4">
                    {auth.user ? (
                        <>
                            <h2 className="text-xl text-gray-800">Hello, {auth.user.name}!</h2>
                            <button onClick={logout} className="bg-red-600 hover:bg-red-700 cursor-pointer text-white py-2 px-4 rounded-lg">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                            Login
                        </Link>
                    )}
                </nav> */}
            </div>
        </AppLayout>
    )
};

