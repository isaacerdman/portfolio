// import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24 max-w-full'>
            <div className='container py-2 flex justify-center md:justify-between items-center max-w-full'>
                <div className='text-2xl font-bold hidden md:inline'>Ike's Portfolio</div>
                <div className='space-x-6'>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About Me</a>
                    <a href="#experience" className='hover:text-gray-400'>Experience</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white hidden
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2
                rounded-full'>Contact Me</button>
            </div>
        </nav>
    )
}

export default Navbar