const getStoredBook = () =>{
    const storedBook = localStorage.getItem('read');
    if(storedBook){
      return JSON.parse(storedBook);
    }else{
      return []
    }    
  }

  const getWishlistBook = () =>{
    const wishlistBook = localStorage.getItem('wishlist');
    if(wishlistBook){
      return JSON.parse(wishlistBook);
    } else{
      return []
    }
  }

export {getStoredBook, getWishlistBook}