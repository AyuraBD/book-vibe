import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../../Utility/LocalStorage';
import { FaAngleDown } from 'react-icons/fa';

const ListedBooks = () => {
    const books = useLoaderData();
    const [listed, setListed] = useState([]);

    useEffect(()=>{
        const storedBook = getStoredBook();
        if(books){
            const listedBook = books.filter(book => storedBook.includes(book.book_id) );
            setListed(listedBook);
        }
    },[books])
  return (
    <div className='lg:px-20 md:px-12 sm:px-8 max-sm:px-4'>
        <div className='bg-third text-center font-bold font-worksans text-3xl mb-4 py-3 rounded-lg'>
            <h3>Books</h3>
        </div>
        <div className='mb-5 flex justify-center w-full right-20'>
            <details className="dropdown">
                <summary className="bg-main cursor-pointer px-5 rounded-md text-white font-worksans font-semibold py-2 flex justify-center items-center m-1">Sort By <FaAngleDown></FaAngleDown></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow bg-third">
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a href="">Published Year</a></li>
                </ul>
            </details>
        </div>
        {/* Listed books container */}
    </div>
  )
}

export default ListedBooks