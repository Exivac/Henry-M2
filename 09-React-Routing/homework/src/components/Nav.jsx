import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import About from './About'

import {Link} from 'react-router-dom'


function Nav({onSearch}) {
  return (
    <nav id="navBar">
        <span>
          <Link to='/'>
          <img id="logoHenry"
          src={Logo}
          width="30" height="30"
          alt=""
          />
          <span>
            Henry - Weather App
          </span>  
          </Link>
        </span>
        <SearchBar
          id='search'
          onSearch={onSearch}
        />
        <Link to='/about'>
        <button id='About'>
         About
        </button>
        </Link>
        
    </nav>
  );
};

export default Nav;
