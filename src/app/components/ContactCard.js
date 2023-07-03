import React from 'react'
import { MdEmail, MdChat, MdForum } from 'react-icons/md';
import { GoArrowRight } from 'react-icons/go';

const ContactCard = ({ heading, line1, line2, task, icon }) => {
    return (
        <div className='w-[50%] h-[200px] bg-gray-100 shadow-lg'>
            <div className="  p-4  w-[80%] m-auto flex flex-col items-center">
                {icon === 'MdEmail' ? <MdEmail className='text-5xl text-red-600' /> : icon === 'MdChat' ? <MdChat className='text-5xl text-red-600' /> : <MdForum className='text-5xl text-red-600' />}

                <h1>{heading}</h1>
                <p className="text-gray-500 text-sm mt-2">{line1}</p>
                <p className="text-gray-500 text-sm mt-1">{line2}</p>
                <p className="text-gray-700 mt-3 flex ">{task} <GoArrowRight className='mt-1 ml-1 text-lg' /></p>

            </div>


        </div>
    )
}

export default ContactCard
