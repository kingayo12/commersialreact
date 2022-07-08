import {React, useState} from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Outlet, Link } from "react-router-dom";
import './Login.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

 


const Login = () => {

const [open, setOpen] = useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  setOpen(!open);

};

  return (
    
    <div className="container login__container">
        <div className="container__login">
            <form className="login-input">
                <h1>Kings DMW</h1>
                <label htmlFor="email"><EmailIcon  className='icon-color'/>
                <input type="email" name="" value="Oreoluwaa08@gmail.com" id="" required/>
                {/* <input type="email" name="" 
                ref={userRef} autoComplete="off" 
                onChange={(e) => setUser(e.target.value)} 
                value={user}
                id="" required/> */}
                </label>
                <label htmlFor="password"><LockIcon className='icon-color'/>
                <input type="password" value="********" id="paswword" required/> 
                {/* <input type="password" autoComplete="off"  onChange={(e) => setPwd(e.target.value)} name="********" id="paswword" value={pwd} required/> */}
                </label>
                 <p>forgot password <span> reset now!!</span></p>
                <button  onClick={handleToggle} className='small' > <Link to="/Homepage"> Login  </Link></button>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
            </form>
            <div className="social__icons">
                <a href="https://web.facebook.com/adewumi.oreoluwa.7374" target="_/blank"> <FacebookIcon  className='icon-color'/> </a>
                <a href="https://twitter.com/Kay33929877"  target="_/blank"><TwitterIcon  className='icon-color'/></a>
                <a href="https://www.instagram.com/kings_n_shopping/"  target="_/blank"><InstagramIcon  className='icon-color'/></a>
            </div>
            
            <h3>Not registered ? <Link to="/signup">Sign Up</Link>
            <Outlet />
            </h3>
                
            
            
        </div>
    </div>
    // )}
    // </>
  )
}

export default Login