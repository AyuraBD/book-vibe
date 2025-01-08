import { Link, useNavigate } from 'react-router-dom'
import signinImg from './../../assets/signin.png'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaTwitter } from 'react-icons/fa';
import { sendEmailVerification} from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthProvider/AuthProvider';


const SignIn = () => {
  const {signIn, signInWithGoogle, signInWithFb, loading} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  // Show or hide password
    const handleShowPassword = (e) =>{
      setShowPassword(e)
    }

    // Sign in
    const handleSignin = e =>{
      e.preventDefault();
      const target = e.target;
      const email = target.email.value;
      const password = target.password.value;
      signIn(email, password)
      .then((res)=>{
        
        if(!res.user.emailVerified){
          sendEmailVerification(res.user)
          .then(()=>{
            toast.success("Please verify your email.");
          })
          .catch(()=>{})
          return;
        }
        if(loading){
          return <span className="loading loading-ring loading-lg"></span>
        }
        toast.success('Signed in Successfully.');
        console.log(res.user);
        target.reset();
        navigate('/');
      })
      .catch((err)=>{
        setError(err.message);
      })
    }

    // Sign in with google
    const handleSignInWithGoogle = () =>{
      signInWithGoogle()
      .then(() =>{
        toast.success('Signed in successfully with google')
      }).catch((err) =>{
        setError(err.message)
        console.log(err.message)
      })
    }
    const handleSignInWithFacebook = () =>{
      signInWithFb()
      .then(() =>{
        toast.success('Signed in with popup using facebook.')
      }).catch(err =>{
        setError(err.message)
      })
    }
  return (
    <div className="min-h-screen bg-base-200 lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-12 md:py-8 sm:py-6 max-sm:py-6">   
      <div className='flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-between items-center'>
        <div className='lg:w-1/2 md:w-full sm:w-full max-sm:w-full bg-white p-3 rounded-3xl'>
          <img className='' src={signinImg} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full max-sm:w-full">
          {/* form heading */}
          <div className='mb-4'>
            <h2 className='text-2xl font-playfair font-bold mb-2'>Welcome back</h2>
            <p>Don't have an account? <Link className='underline text-main' to="/signup">Sign up</Link></p>
          </div>
          {/* Sing up form */}
          <div>
            <form onSubmit={handleSignin} className="">
              <div className="form-control mb-2">
                <input type="email" name="email" placeholder="Your email" className="p-2 rounded-md border border-neutral-400" required />
              </div>
              <div className="form-control mb-2 relative">
                <input type={showPassword ? `text` : `password` } name="password" placeholder="Password" className="p-2 rounded-md border border-neutral-400" required />
                <div onClick={()=>handleShowPassword(!showPassword)} className='absolute right-2 top-3 flex justify-center items-center'>
                  {showPassword ?
                    <FaEye></FaEye> :
                    <FaEyeSlash></FaEyeSlash>
                  }
                </div>
                <label className="label">
                  <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              {error && <p className='text-warning'>{error}</p>}
              <div className="w-1/3 mt-4">
                <input className="w-full bg-main border duration-500 border-main text-white hover:bg-transparent hover:text-main font-semibold py-2 rounded-md cursor-pointer" type="submit" value="Sing in"/>
              </div>
              <div className='text-center my-4 continue-with'>
                <p className="continue text-[17px] font-semibold">or continue with</p>
              </div>
            </form>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <button onClick={handleSignInWithGoogle}><FcGoogle className='text-4xl'></FcGoogle></button>
            <button onClick={handleSignInWithFacebook}><FaFacebook className='text-3xl text-[#316FF6]'></FaFacebook></button>
            <button><FaTwitter className='text-3xl text-[#1DA1F2]'></FaTwitter></button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  )
}

export default SignIn