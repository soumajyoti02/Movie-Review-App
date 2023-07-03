import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Mulish } from 'next/font/google'

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})

const Herosection = ({ title, content, image }) => {
    return (
        <>
            <div className="w-[100vw] h-[89vh] bg-gradient-to-r from-pink-100 via-red-300 to-purple-400">
                <section className=" text-gray-600 h-[89vh] flex flex-wrap justify-between items-center w-[95vw] md:w-[80vw] m-auto">
                    <div className="w-screen md:w-[45%] h-[60%] md:h-full flex items-center">
                        <div className="pl-2 md:pl-12 space-y-2 md:space-y-5">
                            <h1 className='text-3xl md:text-6xl font-extrabold text-center md:text-left'>{title}</h1>
                            <p className="text-gray-800">{content}</p>
                            <Link href={'/movie'} className=''>
                                <button className={`${mulish.className} inline-flex text-white bg-red-500 border-0 py-2 px-40 md:px-6 mt-8 focus:outline-none hover:bg-red-600 rounded text-lg`}>Movie</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-screen md:w-[45%] h-[60%] md:h-full flex md:items-center">
                        <div className="h-[50%] w-full">
                            <Image height={100} width={100} src={image} className='h-full w-full' />
                        </div>
                    </div>
                </section>

                <div className="custom-shape-divider-bottom-1688325342">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Herosection
