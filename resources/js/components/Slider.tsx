import { useRef, useState, useEffect } from "react";

interface Props {
    items: any[];
    renderItem: (item: any, index: number) => React.ReactNode;
}

export default function Slider({ items, renderItem }: Props) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        const cardWidth = container.children[0]?.clientWidth || 0;
        const visibleItems = Math.floor(container.clientWidth / cardWidth);
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        const maxIndex = items.length - visibleItems;
        if (index > maxIndex) index = maxIndex;

        let newScrollLeft = index * cardWidth;

        if (index >= items.length - visibleItems) {
            newScrollLeft = maxScrollLeft;
        }

        if (newScrollLeft > maxScrollLeft) {
            newScrollLeft = maxScrollLeft;
            index = Math.floor(maxScrollLeft / cardWidth);
        }

        container.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
        });

        setCurrentIndex(index);
    };

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.children[0]?.clientWidth || 1;
        const currentVisibleIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(currentVisibleIndex);
    };

    useEffect(() => {
        const handleResize = () => {
            if (!sliderRef.current) return;
            const container = sliderRef.current;
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.children[0]?.clientWidth || 1;
            const currentVisibleIndex = Math.round(scrollLeft / cardWidth);
            setCurrentIndex(currentVisibleIndex);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative flex flex-col gap-4 w-full overflow-hidden md:px-6 md:py-3 rounded-xl">
            {/* Wrapper khusus slider + gradient */}
            <div className="relative">
                {/* Gradient kanan */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Slider content */}
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth gap-0 hide-scrollbar"
                >
                    {items.map((item, index) => renderItem(item, index))}
                </div>
            </div>

            {/* Tombol navigasi (tidak terkena gradient) */}
            <div className="flex items-center justify-end gap-2">
                <button
                    onClick={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
                    className="border border-blue-500 text-white p-2 rounded-full w-10 h-10 cursor-pointer"
                >
                    <i className="fa-solid fa-arrow-left text-blue-500"></i>
                </button>
                <button
                    onClick={() => scrollToIndex(Math.min(currentIndex + 1, items.length - 1))}
                    className="bg-blue-500 text-white p-2 rounded-full w-10 h-10 cursor-pointer"
                >
                    <i className="fa-solid fa-arrow-right text-white"></i>
                </button>
            </div>
        </div>
    );
}
