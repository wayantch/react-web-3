import React from 'react'
import { Link } from 'react-router-dom'

const Complete = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold'>Complete</h1>
      <div className=" mt-5 ">
        Back to <Link to="/homepage" className='text-blue-500'>Homepage</Link>
      </div>
    </div>
  )
}

export default Complete
