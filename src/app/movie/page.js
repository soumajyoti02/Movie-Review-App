import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e61b16314dmsh80e4774207e2db0p1f2e16jsn9e2acdac25f0',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;



    return (
        <>
            <section className="min-h-screen w-[80%] m-auto py-7 shadow-xl">
                <div className="flex flex-wrap w-full mb-20 pt-12">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Top Rated Series and Movies</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Set in a futuristic world, a team of skilled hackers embarks on a dangerous mission to uncover a government conspiracy. As they delve deeper, they encounter unexpected allies and face moral dilemmas that challenge their loyalty. Action-packed and suspenseful, this gripping tale will keep you on the edge of your seat.</p>
                </div>
                <div className="flex flex-wrap w-full">
                    {
                        main_data.map((curElem) => {
                            return <MovieCard key={curElem.jawSummary.id} {...curElem} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Movie;