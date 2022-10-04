import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='nav'>
      <img className='loguito' src={Logo} alt="logo"/>
      <span>Wheater App</span>
      <SearchBar className='buscador' onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
