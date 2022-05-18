import React from 'react'
import Portal from "../assets/portal.png";
import Chatbot from "../assets/chatbot.png";
import Career from "../assets/career.png";

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Portal} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Portal Access</h2>
                <p className='text-center text-4xl font-bold'>$10 <span className='text-sm'>/student</span></p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Access to Student management tool</p>
                    <p className='py-2 border-b mx-8'>Track Students Performance</p>
                    <p className='py-2 border-b mx-8'>Identify Pain points</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col bg-gray-100 p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Chatbot} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Chatbot Access</h2>
                <p className='text-center text-4xl font-bold'>$5 <span className='text-sm'>/student</span></p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>24/7 Availability</p>
                    <p className='py-2 border-b mx-8'>Student friendly</p>
                    <p className='py-2 border-b mx-8'>Track student's mental status </p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Career} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Career Guidance</h2>
                <p className='text-center text-4xl font-bold'>$5 <span className='text-sm'>/student</span></p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Customized solutions</p>
                    <p className='py-2 border-b mx-8'>95% accuracy</p>
                    <p className='py-2 border-b mx-8'>Complete roadmap</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

        </div>
        
    </div>
  )
}

export default Cards