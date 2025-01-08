import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Header = () => {
  const {user, authLogOut, loading} = useContext(AuthContext);

  const links = <>
    <li><NavLink className="hover:bg-[#bef0b6] border font-bold border-white hover:border hover:border-[#23BE0A]" to='/'>Home</NavLink></li>
    <li><NavLink className="hover:bg-[#bef0b6] border font-bold border-white hover:border hover:border-[#23BE0A]" to='/listedbooks' >Listed Books</NavLink></li>
    <li><NavLink className="hover:bg-[#bef0b6] border font-bold border-white hover:border hover:border-[#23BE0A]" to='/pagestoread'>Pages to Read</NavLink></li>
    <li><NavLink className="hover:bg-[#bef0b6] border font-bold border-white hover:border hover:border-[#23BE0A]" to='/reviews'>Reviews</NavLink></li>
    <li><NavLink className="hover:bg-[#bef0b6] border font-bold border-white hover:border hover:border-[#23BE0A]" to='/authors'>Authors</NavLink></li>
    {
      user && <li><NavLink className="hover:bg-[#bef0b6] border font-bold border-white hover:border hover:border-[#23BE0A]" to='/profile'>Profile</NavLink></li>
    }
  </>
  const handleSignOut = () =>{
    if(loading){
      return <span className="loading loading-ring loading-lg"></span>
    }
    authLogOut();
  }
    
  return (
      <div className="navbar bg-base-100 lg:px-20 md:px-12 sm:px-8 max-sm:px-4 mb-5 font-worksans">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
            {links}
          </ul>
        </div>
        <Link to='/' className="lg:text-3xl md:text-2xl sm:text-2xl max-sm:text-xl font-bold">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? 
        <>
          <p>{user?.displayName}</p>
          <button onClick={handleSignOut} className="text-white py-2 px-3 bg-neutral-400 rounded-md ">Log Out</button>
        </>
        :
        <>
          <Link to='/signin' className="bg-main px-3 py-2 text-white rounded-md font-semibold">Sign In</Link>
          <Link to='/signup' className="bg-second px-3 py-2 text-white rounded-md font-semibold">Sign Up</Link>
        </>
        }
      </div>
    </div>
  );
};

export default Header;
