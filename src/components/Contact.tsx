// import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center justify-end'>
                    <div className='flex-1 text-left'>
                        <p>
                            I'm looking for entry level opportunities to test and hone my skills! I'm currently very interesting in full-stack development, but I'm open to front-end or back-end; and even opportunities with AI as that's what I've assisted with in research!
                        </p>
                    </div>
                    <div className='flex-1 text-right'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-orange-500 to-yellow-500 mb-4'>Let's Talk</h3>
                        <div className='mb-4 mt-8 flex justify-end items-center'>
                            <FaEnvelope className='inline-block text-orange-500 mr-2' />
                            <a href='mailto:isaac.erdman6@gmail.com' className='hover:underline'>
                                isaac.erdman6@gmail.com
                            </a>
                        </div>
                        <div className='mb-4 flex justify-end items-center'>
                            <FaPhone className='inline-block text-orange-500 mr-2' />
                            <span>(801) 427-1558</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
