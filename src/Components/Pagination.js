import React from 'react'
import { useGlobalContext } from '../context'

const Pagination = () => {

  const {jumpNext,nbPages,page,jumpPrev} = useGlobalContext()

  return (

  <div className='flex justify-center items-center gap-7 text-white my-5'>
   
    <button className='bg-blue-900 px-5 py-2' onClick={jumpPrev}>PREV</button>

    <p className='text-blue-900'><span>{page + 1 }</span> of <span>{nbPages}</span></p>

    <button className='bg-blue-900 px-5 py-2' onClick={jumpNext}>NEXT</button>
    
  </div>

  )
}

export default Pagination