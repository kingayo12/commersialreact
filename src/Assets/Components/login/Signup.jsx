import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PasswordIcon from '@mui/icons-material/Password';
import { Outlet, Link } from "react-router-dom";
import './Signup.css'



const Signup = () => {

  return (
    <div className="container logins__container">
    <div className="container__logins">
        <div className="social">
          <p>continue with Facebook<FacebookIcon  className='icon-color'/></p>
            
            <p>Continue with Google<GoogleIcon  className='icon-color'/></p>
        </div>
        <form action='submit' className="login-input">
            <h1>Kings DMW</h1>
            <label htmlFor="email"><EmailIcon  className='icon-color'/>
            <input type="email" name="" id="" required/>
            </label>
            <label htmlFor="password">< PasswordIcon className='icon-color'/>
            <input type="password" name="********" id="" required/>
            </label>
            <label htmlFor="password"><LockIcon className='icon-color'/>
            <input type="password" name="********" id="" required/>
            </label>
             <p>forgot password <span> reset now!!</span></p>
            <button type='submit' className='small'> Sign Up</button>

        </form>
            <h3>Already registered ? <Link to="/">Sign Up</Link>
            <Outlet />
            </h3>
            
        
        
    </div>
</div>
  )
}

export default Signup