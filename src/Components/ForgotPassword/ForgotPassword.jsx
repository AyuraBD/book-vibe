import { toast, ToastContainer } from 'react-toastify'
import forgotPasswordImg from './../../assets/forgot-password.png'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import app from '../../Firebase/firebase.config'

const ForgotPassword = () => {
    const auth = getAuth(app);
    const [error, setError] = useState('');

    const handleForgotPassword = e =>{
        setError('');
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            toast.success('We have sent you a link to your email to reset your password.')
        }).catch(err =>{
            setError(err.message)
        })
    }
  return (
    <div className="min-h-screen bg-base-200 lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-12 md:py-8 sm:py-6 max-sm:py-6">   
      <div className='flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-between items-center'>
        <div className='lg:w-1/2 md:w-full sm:w-full max-sm:w-full bg-white p-3 rounded-3xl'>
          <img className='' src={forgotPasswordImg} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full max-sm:w-full">
          {/* form heading */}
          <div className='mb-4'>
            <h2 className='text-2xl font-playfair font-bold mb-2'>Forgot Password?</h2>
            <p>Enter your email and we will send you a link to reset your password.</p>
          </div>
          {/* Sing up form */}
          <form onSubmit={handleForgotPassword} className="">
            <div className="form-control mb-2">
              <input type="email" name="email" placeholder="Your email" className="p-2 rounded-md border border-neutral-400" required />
            </div>            
            <div className="w-1/3 mt-4 mb-3">
              <input className="w-full bg-main border duration-500 border-main text-white hover:bg-transparent hover:text-main font-semibold py-2 rounded-md cursor-pointer" type="submit" value="Send an email"/>
            </div>
            {error && <p className='text-warning my-2'>{error}</p>}               
            <Link className='flex justify-start items-center underline text-main' to='/signin'><MdArrowBack className='mr-2'></MdArrowBack> Back to sign in</Link>
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword