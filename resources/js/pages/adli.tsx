import { Head, usePage } from "@inertiajs/react"
import type { Course, Event, SharedData } from "@/types"

export default function Adli() {
    // const { event } = usePage<SharedData & { event: Event }>().props
    const { course } = usePage<{ course: Course }>().props

    return (
        <div>
            <div className="max-w-3xl mx-auto py-10 px-4">
                <Head title={course.title} />
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <img src={course.image} alt={course.title} className="w-full rounded-lg mb-4" />
                <p className="text-gray-600 mb-2">{course.category} • {course.videos} Video • ⭐ {course.rating}</p>
                <p className="text-xl text-green-600 font-semibold mb-4">Rp{course.price.toLocaleString()}</p>
                <p className="text-gray-800 leading-relaxed">{course.description}</p>
            </div>
        </div>
    );
}