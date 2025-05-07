import { Testimonial } from "@/types";

type Props = {
    testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
    return (
        <div className="p-6 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] max-w-full flex item-start md:items-center gap-4 bg-blue-50 rounded-xl">
            <img
                src={testimonial.image}
                className="w-24 h-60 rounded-lg object-cover bg-gray-300"
            />
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
                <p className="font-semibold text-xl">{testimonial.title}</p>
                <p>{testimonial.message}</p>
            </div>
        </div>
    );
};
