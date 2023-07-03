import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = async ({ params }) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lanf=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e61b16314dmsh80e4774207e2db0p1f2e16jsn9e2acdac25f0',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (
        <>
            <section className="w-[80%] min-h-screen m-auto">
                <div className="w-full m-auto h-20  pt-9">
                    <h2 className="text-2xl font-bold text-red-700">Netflix \ <span className="text-2xl font-bold text-gray-500">{main_data.type}</span></h2>
                </div>

                <div className="h-[55vh] w-full flex justify-between items-center">
                    <div className="w-[45%] h-[77%]">
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} height={200} width={250} className=' w-full rounded-lg' />
                    </div>

                    <div className="w-[45%] h-[77%] flex flex-col justify-center space-y-3">
                        <h1 className="text-2xl font-bold">{main_data.title}</h1>
                        <p className="text-lg text-gray-800">{main_data.synopsis}</p>
                        <Link href={`/movie`}>
                            <button class="flex mt-8 text-white bg-red-500 border-0 py-[0.35rem] px-6 md:px-8 focus:outline-none hover:bg-red-600 rounded text-base ">Back</button>
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Page
