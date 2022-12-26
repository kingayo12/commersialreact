import React from 'react'
import Login from './Assets/Components/login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Assets/Components/login/Signup';
import Homepage from './Assets/Components/homepage/Homepage';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Homepage' element={<Homepage/>}/>
           <Route path="/Signup" element={<Signup/>} />
           <Route path="/" exact element={<Login/>} />
           <Route render={()=> <h3>oops 404</h3>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App