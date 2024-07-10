import React from 'react'

const Testimonials = () => {
  return (
    <div name='testimonials' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Testimonials</p>
          <p className='py-6'>What my clients say</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto bg-[#112240] p-8'>
            <p className='text-lg text-white'>"I have hired Stephen for multiple different development projects. He takes the time to assess each project separately and provides a custom solution based on the needs of any given project. His due diligence on the front end has helped me accurately budget for and understand development projects large and small. I would highly recommend a conversation with Stephen if you are in need of development work!"</p>
            <p className='text-sm text-pink-600 mt-4'>- Luke Hyde, Founder of Atlas Video</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
