import { Link, useNavigate } from 'react-router-dom'
import signupImg from './../../assets/signup.png'
import './SignUp.css'
import { FaEye, FaEyeSlash} from 'react-icons/fa'
import { useContext, useState } from 'react'
import { sendEmailVerification, updateProfile } from 'firebase/auth'
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext } from '../AuthProvider/AuthProvider'

const SignUp = () => {
  const {signUp, loading} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Show and hide password
  const handleShowPassword = (e) =>{
    setShowPassword(e)
  }
  const handleSignUpForm = (e) =>{
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/;
    setError('');
    if (password.length < 6) {
      setError('Your password should be at least 6 characters long.');
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError('Your password should have contain at least one uppercase letter.');
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError('Your password should have contain at least one lowercase letter.');
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError('Your password should have contain at least one number.');
      return;
    } else if (!/(?=.*[@$!%*?#&])/.test(password)) {
      setError('Your password should have contain at least one special character.');
      return;
    } else if (!strongPasswordRegex.test(password)) {
      setError('Your password is invalid.');
      return;
    } else {
      setError('');      
    }

    signUp(email, password)
    .then((res) =>{
      updateProfile(res.user,{
        displayName: name
      })
      .then(()=>{})
      .catch(()=>{})
      sendEmailVerification(res.user)
      .then(()=>{})
      .catch(()=>{})
      if(loading){
        return <span className="loading loading-ring loading-lg"></span>
      }
      target.reset();
      toast.success("Account created successfully. And we have sent an email to your registered email address, please verify your email.");
    })
    .catch((err) =>{
      setError(err.message);
    })

  }

  return (
    <div className="min-h-screen bg-base-200 lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-12 md:py-8 sm:py-6 max-sm:py-6">   
      <div className='flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col gap-10 justify-between items-center'>
        <div className='lg:w-1/2 md:w-full sm:w-full max-sm:w-full bg-white p-3 rounded-3xl'>
          <img className='' src={signupImg} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full max-sm:w-full">
          {/* form heading */}
          <div className='mb-4'>
            <h2 className='text-2xl font-playfair font-bold mb-2'>Get's started</h2>
            <p>Already have an account? <Link className='underline text-main' to="/signin">Sign in</Link></p>
          </div>
          {/* Sing up form */}
          <form className="" onSubmit={handleSignUpForm}>
            <div className="form-control mb-2">
              <input type="text" name="name" placeholder="Your full name" className="p-2 rounded-md border border-neutral-400" required />
            </div>
            <div className="form-control mb-2">
              <input type="email" name="email" placeholder="Your email" className="p-2 rounded-md border border-neutral-400" required />
            </div>
            <div className="form-control mb-2 relative">
              <input type={showPassword ? `text` : `password` } name="password" placeholder="Choose a password" className="p-2 rounded-md border border-neutral-400" required />
              <div onClick={()=>handleShowPassword(!showPassword)} className='absolute right-2 top-3 flex justify-center items-center'>
                {showPassword ?
                  <FaEye></FaEye> :
                  <FaEyeSlash></FaEyeSlash>
                }
              </div>
            </div>
            {/* Error if any complication */}
            { error &&
              <div className='mb-2'>
                <p className='text-warning'>{error}</p>
              </div>
            }
            <div className="mb-2 flex justify-start items-center">
              <input type="checkbox" name="terms" className="w-3 mr-2 rounded-full border border-neutral-400" required />
              <p>Please check our <Link className='underline text-main'>terms</Link> and <Link className='underline text-main'>conditions</Link>.</p>
            </div>
            <div className="w-1/3 mt-4">
              <input className="w-full bg-second border duration-500 border-second text-white hover:bg-transparent hover:text-second font-semibold py-2 rounded-md cursor-pointer" type="submit" value="Sing up"/>
            </div>
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  )
}

export default SignUp