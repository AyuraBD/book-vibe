import { CiStar } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

const Book = ({book}) => {
    const {book_id, book_name, author, img, review, total_pages, ratings, category, tags, publisher, year_of_publish} = book;
    const navigate = useNavigate();
    const handleDetails = (id) =>{
        navigate(`/books/${id}`)
    }
  return (
    <div onClick={()=>handleDetails(book_id)} className='cursor-pointer p-3 border border-third rounded-md'>
        <div className='flex justify-center w-full bg-third rounded-md p-4 mb-3'>
            <img src={img} alt="" />
        </div>
        <div className='flex justify-start gap-2 mb-3'>
            {
                tags.map((tag, idx) => <Link className='bg-[#cdf0c8] px-3 rounded-md font-semibold text-main text-[14px] font-worksans' key={idx}>{tag}</Link>)
            }
        </div>
        <div className='pb-3 border-b border-third mb-3'>
            <h3 className='font-playfair font-semibold text-xl'>{book_name}</h3>
            <p className='font-worksans'>By : {author}</p>
        </div>
        <div className='flex justify-between items-center font-worksans'>
            <p>{category}</p>
            <p className='flex justify-center items-center'>{ratings}<CiStar className='ml-1'></CiStar></p>
        </div>
    </div>
  )
}

export default Book