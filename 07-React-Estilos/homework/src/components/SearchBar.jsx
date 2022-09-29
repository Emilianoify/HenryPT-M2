import React from 'react';
import sb from './Search.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  
  return (
  <form action="" className={`${sb.container}`}>
    <input className={`${sb.borde} ${sb.search}`} type="search" name="" id="" placeholder='Ciudad...' />
    <input className={`${sb.button} ${sb.borde}`} type="submit" value="Agregar" onClick={onSearch}/>
  </form>
    
  
  )
};