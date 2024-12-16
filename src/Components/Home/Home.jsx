import React from 'react'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'

const Home = () => {
  return (
    <div className='min-h-lvh lg:px-20 md:px-12 sm:px-8 max-sm:px-4'>
      <Banner></Banner>
      <Books></Books>
    </div>
  )
}

export default Home