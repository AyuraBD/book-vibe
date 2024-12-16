import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-neutral-900 lg:px-20 md:px-12 sm:px-8 max-sm:px-4 lg:py-6 md:py-6 sm:py-6 max-sm:py-6'>
      <div className='text-neutral-200 text-center font-worksans'>
        <p className=''>Copyright &#169; All rights reserved by <Link to='/'>bookvibe.com</Link></p>
      </div>
    </div>
  )
}

export default Footer