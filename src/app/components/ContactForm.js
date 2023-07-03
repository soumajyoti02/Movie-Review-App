'use client'
import React, { useState } from 'react'

const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`/api/contact`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message,
                })
            })

            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setStatus('success')
            }
            else setStatus('error')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="text-gray-900 text-2xl  mb-1 font-bold title-font text-center ">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Your Feedback is Important to Us</p>

                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Name' value={user.username} onChange={handleChange} required />
                </div>

                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Email' value={user.email} onChange={handleChange} required />
                </div>

                <div className="relative mb-4">
                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                    <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Phone' value={user.phone} onChange={handleChange} required />
                </div>

                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Enter Your Message' value={user.message} onChange={handleChange} required></textarea>
                </div>

                <div>
                    {status === 'success' && <p className="text-green-700">Thank You for your message</p>}
                    {status === 'error' && <p className="text-red-700">There was an Error submitting your message</p>}

                    <button onClick={handleSubmit} type='submit' className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send Message</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
