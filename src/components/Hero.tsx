// import React from 'react'
import HeroImage from '../assets/hero-image.png'
import ResumePDF from '../assets/resume.pdf'

const Hero = () => {
    return (
        <div
            className='bg-black text-white text-center py-16'
            // style={{
            //     backgroundImage: `url(${BackgroundImage})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            // }}
        >
            <img src={HeroImage} alt="" 
            className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'>Ike Erdman</span>
                , Computer Science Student
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I'm enthusiastic about learning and building cool software.
            </p>
            <div className='mt-8 space-x-4'>
                <button onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white hidden
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
                <button
                onClick={() => window.open(ResumePDF, '_blank')} 
                className='bg-gradient-to-r from-blue-500 to-purple-500 text-white hidden
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                >Resume</button>
            </div>
        </div>
    )
}

export default Hero