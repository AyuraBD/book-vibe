import { Link } from 'react-router-dom'
import banner from '../../assets/bookimg/banner.png'
const Banner = () => {
  return (
    <div>
        <div className='bg-third flex lg:flex-row md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse justify-center items-center lg:px-20 md:px-12 sm:px-8 max-sm:px-4 lg:py-12 md:py-8 sm:py-6 max-sm:py-6 rounded-3xl'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-4/5 max-sm:w-4/5 lg:text-start md:text-start sm:text-center max-sm:text-center'>
                <h1 className='font-playfair lg:text-6xl md:text-4xl sm:text-2xl max-sm:text-2xl leading-tight lg:mb-10 md:10 sm:mb-5 max-sm:mb-5 font-semibold'>Books to freshen up your bookshelf</h1>
                <Link to='/listedbooks' className='bg-main text-white px-6 py-2 rounded-md font-bold'>View The List</Link>
            </div>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full max-sm:w-full flex lg:justify-end md:justify-end sm:justify-center max-sm:justify-center lg:mb-0 md:mb-0 sm:mb-6 max-sm:mb-6'>
                <img className='sm:w-2/3 max-sm:w-2/3' src={banner} alt="a book picture" />
            </div>
        </div>
    </div>
  )
}

export default Banner