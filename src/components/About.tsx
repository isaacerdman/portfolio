// import React from 'react'
import AboutImage from '../assets/aboutme-image.png'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt="" 
                    className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            I am a Computer Science student with a desire to never stop learning.
                            In a shifting sphere of technology, I balance time between developing
                            hard skills as a developer and understanding AI. I'm passionate about
                            owning a project and creating software to solve problems.
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full
                                    transform transition-tranform duration-300 hover:scale-105 w-8/12'>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full
                                    transform transition-tranform duration-300 hover:scale-105 w-9/12'>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>Node.js</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full
                                    transform transition-tranform duration-300 hover:scale-105 w-7/12'>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>Python</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full
                                    transform transition-tranform duration-300 hover:scale-105 w-11/12'>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>Java</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full
                                    transform transition-tranform duration-300 hover:scale-105 w-6/12'>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>C++</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full
                                    transform transition-tranform duration-300 hover:scale-105 w-9/12'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-orange-500 to-yellow-500'>
                                    0
                                </h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-orange-500 to-yellow-500'>
                                    10+
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-orange-500 to-yellow-500'>
                                    15+
                                </h3>
                                <p>Completed Courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About