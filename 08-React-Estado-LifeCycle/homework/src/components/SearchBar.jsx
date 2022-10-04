import React from "react";
import styled from './Search.module.css'

export default function SearchBar({onSearch, className}) {
  return (
    <form className= {className} onSubmit={(e) => {
      e.preventDefault();
      let inputValue = document.getElementById('inputSearch');
      onSearch(inputValue.value);
      inputValue = "";
    }}>
      <input id="inputSearch" className= {[styled.search, styled.borde].join(" ")}
        type="text"
        placeholder="Ciudad..."
      />
      <input className= {[styled.button, styled.borde].join(" ")} type="submit" value="Agregar" />
    </form>
  );
}
