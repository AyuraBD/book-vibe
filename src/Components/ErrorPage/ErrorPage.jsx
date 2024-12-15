import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { TfiFaceSad } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <div className='lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-36 md:py-36 sm:py-32 max-sm:py-28'>
          <div className='flex flex-col justify-center items-center'>
            <TfiFaceSad className='text-8xl font-bold mb-3'></TfiFaceSad>
            <p className='font-bold text-6xl mb-3'>404</p>
            <p className='font-bold text-4xl mb-3 text-neutral-400'>Page not found</p>
            <p className='font-semibold text-neutral-700 text-center'>The page you are looking for doesn't exist or another error occured.</p>
            <p className='font-semibold text-neutral-700 text-center'>Go back, or head over the <Link to='/'>bookvibe.com</Link> to choose a new direction.</p>
          </div>
        </div>
    </div>
  )
}

export default ErrorPage