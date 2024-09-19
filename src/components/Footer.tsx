// import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>Ike</h3>
                        <p className='text-gray-400'>
                            Computer Science student at BYU graduating in April 2025
                        </p>
                    </div>
                </div>

                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-400'>
                        &copy; {new Date().getFullYear()}
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href='https://www.facebook.com/profile.php?id=100012151997485'
                        className='text-gray-400 hover:text-white'
                        target='_blank' 
                        rel='noopener noreferrer'>
                            <FaFacebook />
                        </a>
                        <a href='https://www.linkedin.com/in/ike-erdman-2b4105224/'
                        className='text-gray-400 hover:text-white'
                        target='_blank' 
                        rel='noopener noreferrer'>
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/isaacerdman'
                        className='text-gray-400 hover:text-white'
                        target='_blank' 
                        rel='noopener noreferrer'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer