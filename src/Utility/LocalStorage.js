const getStoredBook = () =>{
    const getBooks = localStorage.getItem('read');
    if(getBooks){
        return JSON.parse(getBooks);
    }
    return [];
}

const saveBook = (id, added, existed) => {
    const storedBook = getStoredBook();
    const exist = storedBook.find(book => book === id);
    if(!exist){
        storedBook.push(id);
        localStorage.setItem('read',JSON.stringify(storedBook))
        added
    } else{
        existed
    }
    
}

export {getStoredBook, saveBook}