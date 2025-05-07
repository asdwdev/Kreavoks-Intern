import { Event } from "@/types";

type Props = {
    event: Event;
}

function getEventStatus(startDate: Date): string {
    const eventDate = new Date(startDate);
    const now = new Date();
    // Reset time ke 00:00 agar perbandingan hanya tanggal
    eventDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Hari ini";
    return `${diffDays} hari lagi`;
}

export default function EventCard({ event }: Props) {
    const eventStatus = getEventStatus(event.start_date);

    return (
        <div className="relative flex flex-col flex-grow w-48 md:w-64 group m-1 hover:scale-105 transition duration-300">
            <div className="relative z-0 h-full flex flex-col rounded-xl bg-white overflow-hidden group-hover:ring-2 group-hover:ring-blue-500">
                <div className="relative">
                    <img src="images/backgrounds/CounterBg.svg" className="object-cover aspect-3/2" />
                    <p className="absolute bottom-2 right-2 flex items-center gap-2 text-xs bg-white rounded-full px-2 py-1">
                        <i className="fa-regular fa-calendar"></i>
                        {new Date(event.start_date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>
                </div>

                {/* Information */}
                <div className="p-2">
                    <p className={`px-2 py-0.5 text-xs rounded-full w-fit ${eventStatus === "Expired"
                            ? "bg-red-50 text-red-400"
                            : "bg-amber-50 text-amber-400"
                        }`}>
                        {eventStatus}
                    </p>
                    <h2 className="text-black font-medium line-clamp-2 leading-[1.5rem] min-h-[3rem]">
                        {event.title}
                    </h2>
                    <p className="text-green-600 font-semibold mt-2">
                        Rp{event.price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </div>
    );
}
