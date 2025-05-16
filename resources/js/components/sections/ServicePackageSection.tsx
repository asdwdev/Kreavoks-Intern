import { ServicePackage, type SharedData } from '@/types';
import { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ServicePackageCard from '../cards/ServicePackageCard';
import CheckerboardBackground from '../CheckerboardBackground';

type Props = {
    servicePackages: Record<"Website" | "Mobile App" | "Design", ServicePackage[]>;
};

export default function ServicePackageSection({ servicePackages }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<"Website" | "Mobile App" | "Design">("Website");
    const [isMobile, setIsMobile] = useState(false);

    // Deteksi ukuran layar
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px adalah breakpoint MD di Tailwind
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div className="relative p-5 md:p-8 w-full flex flex-col items-center justify-center gap-6 z-10 bg-blue-500 overflow-hidden">
            <CheckerboardBackground seed={47} className="z-0" />

            {/* Tambahkan container agar konten tidak terlalu melebar */}
            <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-6">
                <p className="text-3xl text-white font-semibold text-center z-10">
                    Pilih Paket Jasa Layanan<br />Sesuai Kebutuhan Anda
                </p>

                <div className="flex flex-row items-center justify-between gap-2 bg-white rounded-full p-1 z-10 mb-2 md:mb-8">
                    {(["Website", "Mobile App", "Design"] as const).map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedCategory(item)}
                            className={`cursor-pointer px-2 md:px-4 py-1 rounded-full transition ${selectedCategory === item
                                    ? "bg-blue-500 text-white font-semibold"
                                    : "text-gray-500 font-medium hover:bg-blue-50"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Isi kontennya tetap sama */}
                {isMobile ? (
                    <div className="w-full z-10">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="w-full sm:w-[60%]"
                        >
                            {servicePackages[selectedCategory].map((paket, i) => (
                                <SwiperSlide key={i} className="px-2 py-4">
                                    <ServicePackageCard paket={paket} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-6 z-10 w-full">
                        {servicePackages[selectedCategory].map((paket, i) => (
                            <ServicePackageCard key={i} paket={paket} />
                        ))}

                        <div className="col-span-3 w-full relative bg-gradient-to-r from-[#0359DB] via-[#0359DB] to-white/60 rounded-lg px-4 py-4 md:py-6 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between overflow-hidden">
                            <CheckerboardBackground seed={53} mask={"left"} className="z-0" />
                            <div className="text-white flex flex-col justify-start z-50">
                                <p className="text-xl md:text-2xl font-semibold">Masih Bingung atau belum<br /> merasa ada yang cocok?</p>
                                <p>Konsultasikan bersama kami</p>
                            </div>
                            <div className="hover:scale-105 transition duration-300 active:scale-95 select-none cursor-pointer inline-flex items-center bg-white rounded-full px-3 py-2 gap-3 text-blue-700 font-semibold z-50">
                                <IoLogoWhatsapp size={18} />
                                Hubungi Kami
                            </div>
                        </div>
                    </div>
                )}

                {/* Versi mobile untuk banner CTA */}
                <div className="md:hidden w-full relative bg-gradient-to-r from-[#0359DB] via-[#0359DB] to-white/60 rounded-lg px-4 py-4 md:py-6 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between overflow-hidden">
                    <CheckerboardBackground seed={53} mask={"left"} className="z-0" />
                    <div className="text-white flex flex-col justify-start z-50">
                        <p className="text-xl md:text-2xl font-semibold">Masih Bingung atau belum<br /> merasa ada yang cocok?</p>
                        <p>Konsultasikan bersama kami</p>
                    </div>
                    <div className="self-center hover:scale-105 transition duration-300 active:scale-95 select-none cursor-pointer inline-flex items-center bg-white rounded-full px-3 py-2 gap-3 text-blue-700 font-semibold z-50">
                        <IoLogoWhatsapp size={18} />
                        Hubungi Kami
                    </div>
                </div>
            </div>
        </div>

    );
}