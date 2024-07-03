import React from 'react'
import StudyTool from '../assets/study-tool.png'
import Library from '../assets/library.png'
import SWDS from '../assets/SWDS.png'
import Recipe from '../assets/recipe.png'
import Movies from '../assets/movies.png'
import Reservations from '../assets/reservations.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{backgroundImage: `url(${Reservations})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Full-Stack JS Application
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Movies})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Node.js Database
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${SWDS})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${StudyTool})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Library})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>JS Application
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Recipe})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work