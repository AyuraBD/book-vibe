import { useEffect, useState } from "react"
import Book from "./Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
  return (
    <div className='lg:py-10 md:py-10 sm:py-6 max-sm:py-4'>
        <div className='text-center mb-4'>
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl max-sm:text-xl font-playfair font-bold'>Books</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1  gap-4">
            {
                books.map(book => <Book key={book.book_id} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default Books