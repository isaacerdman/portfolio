import React from 'react'

const roles = [
    {
        id: 1,
        title: "Research Assistant",
        description: "Developed image processing and AI models in Computer Vision at BYU"
    },
    {
        id: 2,
        title: "CS & Math Tutor",
        description: "Instructed students age 8-18 in foundational and advanced programming (Python, Java, C++)"
    }
]

const Experience = () => {
    return (
        <div className='bg-black text-white py-20' id='experience'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roles.map(role => (
                        <div key={role.id}
                        className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                        transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-orange-500 to-yellow-500'>
                                {role.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-orange-500 to-yellow-500'>
                                {role.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>{role.description}</p>
                            <a href='#' className='mt-4 inline-block text-orange-400 hover:text-yellow-400'>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience