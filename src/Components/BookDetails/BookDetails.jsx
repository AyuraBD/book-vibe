import { Link, useLoaderData, useParams } from 'react-router-dom'
import { getStoredBook, saveBook } from '../../Utility/LocalStorage';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const BookDetails = () => {
  const books = useLoaderData();
  const {id} = useParams();

  const getStoredBook = () =>{
    const storedBook = localStorage.getItem('read');
    if(storedBook){
      return JSON.parse(storedBook);
    }
    return [];
  }

  const saveBook = id =>{
    const storedBook = getStoredBook();
    const exists = storedBook.find(bookId => bookId === id);
    if(!exists){
      storedBook.push(id);
      localStorage.setItem('read', JSON.stringify(storedBook))
      toast.success('Added Successfully.')
    }else{
      toast.error('Already Addeded.')
    }
  }
  const book = books.find(book => book.book_id === parseInt(id));
  const {book_id, book_name, author, img, review, total_pages, ratings, category, tags, publisher, year_of_publish} = book;
  
  const handleRead = (id) =>{
    saveBook(id);    
  }
  return (
    <div className='lg:px-20 md:px-12 sm:px-8 max-sm:px-4 lg:py-10 md:py-6 sm:py-4 max-sm:py-2'>
        <div className='grid gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1'>
          <div className='bg-third lg:py-0 md:py-0 sm:py-4 max-sm:py-3 rounded-lg flex justify-center items-center'>
            <img className='w-1/2' src={img} alt={`picture of ${book_name}`} />
          </div>
          <div className='lg:py-6 md:py-4 sm:py-2 max-sm:py-2'>
            <h2 className='font-playfair mb-3 text-2xl font-semibold'>{book_name}</h2>
            <div className='font-worksans'>
              <p className='mb-2'>By : {author}</p>
              <p className='py-1 mb-2 border-y border-third'>{category}</p>
              <p className='mb-2'><strong>Review :</strong> {review}</p>
              <div className='flex gap-4 mb-2 py-3 border-b border-third'>
                <h4>Tags: </h4>
                {
                  tags.map((tag, idx) => <Link className='bg-[#cdf0c8] px-3 rounded-md font-semibold text-main text-[14px] font-worksans' key={idx}>{tag}</Link>)
                }
              </div>
              <div className='lg:w-4/5 md:w-full sm:w-2/3 max-sm:w-full mb-5'>
                <div className='text-start mb-2 flex justify-start items-center'>
                  <p className='w-1/2'>Number  of pages :</p>
                  <p className='font-bold w-1/2'>{total_pages}</p>
                </div>
                <div className='text-start mb-2 flex justify-start items-center'>
                  <p className='w-1/2'>Publisher :</p>
                  <p className='font-bold w-1/2'>{publisher}</p>
                </div>
                <div className='text-start mb-2 flex justify-start items-center'>
                  <p className='w-1/2'>Year of Publishing :</p>
                  <p className='font-bold w-1/2'>{year_of_publish}</p>
                </div>
                <div className='text-start mb-2 flex justify-start items-center'>
                  <p className='w-1/2'>Rating :</p>
                  <p className='font-bold w-1/2'>{ratings}</p>
                </div>
              </div>
              <div>
                <button onClick={()=>{handleRead(book_id)}} className="bg-transparent text-[#000000] border border-[#000000] hover:bg-[#000000] hover:text-white px-4 py-2 mr-4 rounded-md font-medium duration-300">Read</button>
                <button onClick={()=>{handleRead(book_id)}} className="bg-second border border-second hover:bg-transparent hover:text-second px-3 py-2 text-white rounded-md font-medium duration-300">Wishlist</button>
              </div>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BookDetails