import React from 'react'
import { IoLogoBuffer } from 'react-icons/io'
import { AiOutlineClose, AiOutlineCheck, AiOutlineQuestion } from 'react-icons/ai'

const Sidebar = () => {
  return (

      <div className='fixed left-0 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl'>
        <div className='flex justify-start items-center gap-1'>
          <IoLogoBuffer size={25} />
          <h1 className='font-bold uppercase text-xl'>Company</h1>
        </div>

        <ul className='mt-7 text-base'>
          <li className='sidebar-list-item acitve'><AiOutlineQuestion /> My Questions</li>
          <li className='sidebar-list-item'><AiOutlineCheck /> Attempted</li>
          <li className='sidebar-list-item'><AiOutlineClose /> Unattempted</li>
        </ul>
      </div>



  )
}

export default Sidebar
