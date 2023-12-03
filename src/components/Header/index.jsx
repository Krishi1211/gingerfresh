import React from 'react';

import './Header.css';
// import Navbar from './Navbar/index';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Header() {
 
  return (
    <header className="header" style={{background:'orange'}}>
      <a href="/" className="logo">
        <i>
          {/* <FontAwesomeIcon icon={faShoppingBasket} /> */}
        </i>
        groco
      </a>
      <Navbar/>
        {/* <button type="button" id="search-btn" > */}
        <PersonIcon sx={{fontSize:'60px'}}/>
        {/* </button> */}
        <ShoppingCartIcon sx={{fontSize:'50px'}}/>
        <FavoriteBorderIcon sx={{marginLeft:'-65px',marginBottom:'30px'}}/>
        {/* <button type="button" id="user-btn" >
        </button> */}
        
      <button type="button" id="user-btn1" >
          Sign Up
        </button>
    </header>
  );
}
