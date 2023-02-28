import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../styles/searchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import {Context} from '../utils/Context';

const SearchBar = () => {
  

  const {setSearchTermFunc}  = useContext(Context);

  const navigate = useNavigate();
  const submitEventHandler = (event) => {
    event.preventDefault();
    const searchTerm = event.target[0].value;
    searchTerm&&navigate(`/search/${searchTerm}`);
    setSearchTermFunc(searchTerm);
    
  }
  return <form onSubmit={submitEventHandler}>
    <input type="text" placeholder='Search here' />
     <button><SearchIcon/></button>   

  </form>
}


export default SearchBar;
