"use client"

import { Portfolio } from "@/types";

interface Props {
    portfolio: Portfolio
}

export default function PortfolioCard({ portfolio }: Props) {
    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img
                    src={portfolio.image || `/images/placeholders/portfolio-card.png`} //Change the placeholder at public/images/placeholders/portfolio-card.png (make sure use the same filename)
                    alt={portfolio.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                        <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs rounded-full mb-2">
                            {portfolio.category}
                        </span>
                        <h3 className="text-white text-xl font-semibold">{portfolio.title}</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{portfolio.title}</h3>
                    <span className="text-sm text-gray-500">{portfolio.year}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{portfolio.client}</p>
                <p className="text-gray-700 line-clamp-2">{portfolio.description}</p>

                {portfolio.link && (
                    <a
                        href={portfolio.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-600"
                    >
                        View Project <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                )}
            </div>
        </div>
    );
};