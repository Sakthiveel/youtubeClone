import React from 'react';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import classes from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

   return <nav>
      <Link to={ `/`}><img src={logo}></img></Link>
      <SearchBar/>
   </nav>
}

export default Navbar;
