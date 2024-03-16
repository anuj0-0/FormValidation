// import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <h1>UserData</h1>
    <ul>
    <li><Link className="active" to="/">Login</Link></li>
    <li><Link to="data">Data</Link></li>
   
  </ul>
    </>
  );
};

export default Navbar;
