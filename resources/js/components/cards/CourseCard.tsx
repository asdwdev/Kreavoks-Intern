import { Course } from "@/types";
import { StarIcon, TvMinimalPlayIcon } from "lucide-react";

type Props = {
    course: Course;
};

export default function CourseCard({ course }: Props) {
    return (
        <div className="relative flex flex-col flex-grow w-48 md:w-64 group m-1 hover:scale-105 transition duration-300">
            <div className="relative z-0 h-full flex flex-col rounded-xl bg-white overflow-hidden group-hover:ring-2 group-hover:ring-blue-500">
                <div className="relative">
                    {/* Thumbnail placeholder */}
                    <img src="images/backgrounds/CounterBg.svg" className="object-cover aspect-3/2" alt={course.title} />
                </div>

                {/* Course Info */}
                <div className="p-2 flex flex-col gap-1">
                    <div className="text-xs text-gray-500 flex justify-between">
                        <span className="inline-flex items-center text-xs text-gray-600 gap-1">
                            <StarIcon size={12} className="text-yellow-400" />
                            <span>{course.rating.toFixed(1)}</span>
                            <span className="text-gray-400">({course.sold.toLocaleString("id-ID")} terjual)</span>
                        </span>

                        <span className="inline-flex items-center text-xs text-gray-600 gap-1">
                            <TvMinimalPlayIcon size={16} className="text-gray-600" />
                            <span>{course.videos} video</span>
                        </span>
                    </div>
                    <p className="text-xs font-medium bg-blue-50 text-blue-500 rounded-full px-2 py-0.5 w-fit">
                        {course.category}
                    </p>
                    <h2 className="text-black font-medium line-clamp-2 leading-[1.5rem] min-h-[3rem]">
                        {course.title}
                    </h2>
                    <p className="text-green-600 font-semibold mt-1">
                        Rp{course.price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </div>
    );
}