import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredBook, getWishlistBook } from "../../Utility/LocalStorage";
import { FaAngleDown } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import './ListedBooks.css'

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBook, setWishlistBook] = useState([]);

  useEffect(() => {
    const storedBook = getStoredBook();
    if (books) {
      const listedBook = books.filter((book) =>
        storedBook.includes(book.book_id)
      );
      setReadBooks(listedBook);
    }
  }, [books]);
  useEffect(() => {
    const wishlistBook = getWishlistBook();
    if (books) {
      const listedWishlist = books.filter((book) =>
        wishlistBook.includes(book.book_id)
      );
      setWishlistBook(listedWishlist);
    }
  }, [books]);

	const navigate = useNavigate();

	const handleListedBookDetails = (id)=>{
		navigate(`/listedbookdetails/${id}`);
	}

  return (
    <div className="lg:px-20 md:px-8 sm:px-6 max-sm:px-4">
      <div className="bg-third text-center font-bold font-worksans lg:text-3xl md:text-2xl sm:text-2xl max-sm:text-xl mb-4 py-3 rounded-lg">
        <h3>Books</h3>
      </div>
      <div className="mb-5 flex justify-center w-full right-20">
        <details className="dropdown">
          <summary className="bg-main cursor-pointer px-5 rounded-md text-white font-worksans font-semibold py-2 flex justify-center items-center m-1">
            Sort By <FaAngleDown></FaAngleDown>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow bg-third">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a href="">Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* Listed books container */}
      <div>
      <div role="tablist" className="tabs tabs-lifted">
				<input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
						defaultChecked="true"
          />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6 md:p-4 sm:p-2 max-sm:p-2">
            {readBooks.map((readBook) => (
              <div key={readBook.book_id} className="border border-third p-3 rounded-lg flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col justify-start items-center mb-4 lg:gap-6 md:gap-6 sm:gap-3 max-sm:gap-3">
                <div className="lg:w-1/5 md:w-2/5 sm:w-full max-sm:w-full flex justify-center items-center bg-third p-2 rounded-lg">
                  <img className="lg:w-5/6 md:w-4/6 sm:w-2/6 max-sm:w-3/6" src={readBook.img} alt=""/>
                </div>
                <div className="lg:w-4/5 md:w-3/5 sm:w-full max-sm:w-full font-worksans">
                  <h2 className="font-playfair mb-2 text-xl font-semibold">
                    {readBook.book_name}
                  </h2>
                  <div className="font-worksans">
                    <p className="mb-1">By : {readBook.author}</p>
                    <p className="py-1 mb-1">{readBook.category}</p>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col lg:gap-4 mb-1">
                      <div className="flex gap-4">
												<p>Tags: </p>
												{readBook.tags.map((tag, idx) => (
													<Link className="bg-[#cdf0c8] px-3 rounded-md font-semibold text-main text-[14px]" key={idx}>
														{tag}
													</Link>
												))}
											</div>
                      <p className="flex justify-start items-center">
                        <CiLocationOn className="mr-2"></CiLocationOn> Year of
                        Publishing : {readBook.year_of_publish}
                      </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-start border-b border-third pb-1 mb-1 lg:gap-4">
                      <div className="text-start flex justify-start items-center mr-4">
                        <p className="flex justify-start items-center mr-2">
                          <GoPeople className="mr-1"></GoPeople>Publisher :
                        </p>
                        <p className="">{readBook.publisher}</p>
                      </div>
                      <div className="text-start flex justify-start items-center">
                        <p className="flex justify-start items-center mr-2">
                          <LuFileSpreadsheet className="mr-1"></LuFileSpreadsheet>
                          Pages :
                        </p>
                        <p className="">{readBook.total_pages}</p>
                      </div>
                    </div>
										<div className="pt-2 flex justify-start items-center lg:gap-4 md:gap-2 sm:gap-2 max-sm:gap-2">
											<span className="text-fourth text-[15px] bg-[#328EFF26] px-2 py-1 rounded-full">Category : {readBook.category}</span>
											<span className="text-fifth text-[15px] bg-[#FFAC3326] px-2 py-1 rounded-full">Ratings : {readBook.ratings}</span>
											<button onClick={()=>handleListedBookDetails(readBook.book_id)} className="bg-main text-white text-[15px] px-2 py-1 rounded-full">View Details</button>
										</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
				{/* Wishlist Books */}
					<input 
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6 md:p-4 sm:p-2 max-sm:p-2">
            {wishlistBook.map((wishlistBook) => (
              <div key={wishlistBook.book_id} className="border border-third p-3 rounded-lg flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col justify-start items-center mb-4 lg:gap-6 md:gap-6 sm:gap-3 max-sm:gap-3">
                <div className="lg:w-1/5 md:w-2/5 sm:w-full max-sm:w-full flex justify-center items-center bg-third p-2 rounded-lg">
                  <img className="lg:w-5/6 md:w-4/6 sm:w-2/6 max-sm:w-3/6" src={wishlistBook.img} alt=""/>
                </div>
                <div className="lg:w-4/5 md:w-3/5 sm:w-full max-sm:w-full font-worksans">
                  <h2 className="font-playfair mb-2 text-xl font-semibold">
                    {wishlistBook.book_name}
                  </h2>
                  <div className="font-worksans">
                    <p className="mb-1">By : {wishlistBook.author}</p>
                    <p className="py-1 mb-1">{wishlistBook.category}</p>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col lg:gap-4 mb-1">
                      <div className="flex gap-4">
												<p>Tags: </p>
												{wishlistBook.tags.map((tag, idx) => (
													<Link className="bg-[#cdf0c8] px-3 rounded-md font-semibold text-main text-[14px]" key={idx}>
														{tag}
													</Link>
												))}
											</div>
                      <p className="flex justify-start items-center">
                        <CiLocationOn className="mr-2"></CiLocationOn> Year of
                        Publishing : {wishlistBook.year_of_publish}
                      </p>
                    </div>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-start border-b border-third pb-1 mb-1 lg:gap-4">
                      <div className="text-start flex justify-start items-center mr-4">
                        <p className="flex justify-start items-center mr-2">
                          <GoPeople className="mr-1"></GoPeople>Publisher :
                        </p>
                        <p className="">{wishlistBook.publisher}</p>
                      </div>
                      <div className="text-start flex justify-start items-center">
                        <p className="flex justify-start items-center mr-2">
                          <LuFileSpreadsheet className="mr-1"></LuFileSpreadsheet>
                          Pages :
                        </p>
                        <p className="">{wishlistBook.total_pages}</p>
                      </div>
                    </div>
										<div className="pt-2 flex justify-start items-center lg:gap-4 md:gap-2 sm:gap-2 max-sm:gap-2">
											<span className="text-fourth text-[15px] bg-[#328EFF26] px-2 py-1 rounded-full">Category : {wishlistBook.category}</span>
											<span className="text-fifth text-[15px] bg-[#FFAC3326] px-2 py-1 rounded-full">Ratings : {wishlistBook.ratings}</span>
											<button onClick={()=>handleListedBookDetails(wishlistBook.book_id)} className="bg-main text-white text-[15px] px-2 py-1 rounded-full">View Details</button>
										</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
