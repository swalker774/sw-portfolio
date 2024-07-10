import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import portrait from '../assets/Stephen_Walker.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] pt-24 sm:pt-0'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-col sm:flex-row items-center'>
          <div className='flex-1'>
            <p className='text-pink-600 text-lg'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Stephen Walker</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>I'm a full-stack developer specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  View Work
                  <span className='group-hover:rotate-90 duration-200'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className='flex-1 mt-8 sm:mt-0 sm:ml-20'>
            <img src={portrait} alt='Self Portrait' className='w-4/5 h-auto rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
