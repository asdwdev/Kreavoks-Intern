"use client"

import type { Mentor } from "@/types"

interface Props {
    mentor: Mentor
}

export default function MentorCard({ mentor }: Props) {
    return (
        <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden">
            <img
                src={mentor.image || `/images/placeholders/mentor-card.png`} //Change the placeholder at public/images/placeholders/mentor-card.png (make sure use the same filename)
                alt={mentor.name}
                className="w-full h-64 object-top object-cover"
            />
            <div className="p-4 text-left flex flex-col h-full">
                <h3 className="font-semibold text-lg">{mentor.name}</h3>

                {mentor.job && (
                    <p className="text-sm text-gray-500">
                        {mentor.job}
                    </p>
                )}

                {mentor.role && (
                    <span className="mt-1 inline-block text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full w-max">
                        {mentor.role}
                    </span>
                )}
            </div>
        </div>
    )
}