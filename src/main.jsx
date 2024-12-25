import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import Books from './Components/Books/Books.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import ListedBookDetails from './Components/ListedBookDetails/ListedBookDetails.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Authors from './Components/Authors/Authors.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/SingIn/SignIn.jsx'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword.jsx'

const router = new createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:`/books/:id`,
        element: <BookDetails></BookDetails>,
        loader:() => fetch(`../books.json`)
      },
      {
        path:'/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader:() => fetch(`../books.json`)
      },
      {
        path:'/listedbookdetails/:id',
        element: <ListedBookDetails></ListedBookDetails>,
        loader: () => fetch(`../books.json`)
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>,
        loader: ()=> fetch('../books.json')
      },
      {
        path:'/reviews',
        element:<Reviews></Reviews>,
        loader: () => fetch('../reviews.json')
      },
      {
        path:'/authors',
        element: <Authors></Authors>,
        loader: () => fetch('../authors.json')
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/forgot-password',
        element:<ForgotPassword></ForgotPassword>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
