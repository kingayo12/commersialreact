import React from 'react'
import './Nav.css'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav__container">
        <div className="nav-head">
            <div className="nav__head-content">
                <div className="fir"> 
                    <EmojiObjectsIcon />
                </div>
                <div className="sir">
                <AccountCircleIcon/>
                </div>

            </div>
        </div>
        <div className="nav-content">
            <div className="nav-logo">
                <h1>KINGDMW</h1>
            </div>
            <ul className="nav-contents">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/">Homepage</Link></li>
            </ul> 
        </div>
       <Outlet />
    </div>
    
  )
}

export default Nav