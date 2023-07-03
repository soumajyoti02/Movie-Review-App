import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (curElem) => {
    const { id, type, title, synopsis, backgroundImage } = curElem.jawSummary;

    return (
        <>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <Image height={backgroundImage.height} width={backgroundImage.width} className="h-40 rounded w-full object-cover object-center mb-6" src={backgroundImage.url} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{type}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                    <p className="leading-relaxed text-base">{synopsis.substring(0, 66)}...</p>
                    <Link href={`/movie/${id}`}>
                        <button class="flex mt-8 text-white bg-red-500 border-0 py-[0.35rem] px-6 md:px-8 focus:outline-none hover:bg-red-600 rounded text-base ">Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard
