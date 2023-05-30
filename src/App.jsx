import React from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/Navbar'
import QuestionContainer from './components/QuestionContainer'

const App = () => {
  return (
    <div className='flex text-gray-700'>
      <Sidebar />
      <div className='flex flex-col w-full lg:pl-48'>
        <Navbar />
        <QuestionContainer />
      </div>
    </div>
  )
}

export default App
