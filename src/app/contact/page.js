import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-16 py-24 mx-auto flex  flex-wrap space-y-5">

                    <div className="w-screen h- flex  justify-between items-center space-x-10">
                        <ContactCard heading={"Email"} line1={"Monday to Friday Expected"} line2={"Response time: 72 hours"} task={"Send Email"} icon={"MdEmail"} />

                        <ContactCard heading={"Live Chat"} line1={"Weekdays: 9 AM - 6 PM ET"} line2={"Weekends: 9 AM - 5 PM ET"} task={"Chat Now"} icon={"MdChat"} />

                        <ContactCard heading={"Community Forum"} line1={"Monday to Friday Expected"} line2={"Response time: 72 hours"} task={"Ask The Community"} icon={"MdForum"} />
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
                        <ContactForm />
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52819.49916743762!2d77.52553846275568!3d34.16632578590527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb21445fed85%3A0xd1bb09975086f710!2sLeh!5e0!3m2!1sen!2sin!4v1688364988789!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-screen h-[70vh]'></iframe>
            </section>
        </>
    )
}

export default Contact
