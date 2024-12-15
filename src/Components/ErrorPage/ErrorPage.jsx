import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { TfiFaceSad } from 'react-icons/tfi'

const ErrorPage = () => {
  return (
    <div>
        <Header></Header>
        <div className='lg:px-20 md:px-8 sm:px-6 max-sm:px-4 py-36'>
          <div className='flex flex-col justify-center items-center'>
            <TfiFaceSad className='text-8xl font-bold mb-3'></TfiFaceSad>
            <p className='font-bold text-6xl mb-3'>404</p>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default ErrorPage