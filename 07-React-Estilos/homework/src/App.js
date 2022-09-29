import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import styled from './App.module.css'

function App() {
  return (
    <div className={styled.app}>
      <header className={styled.header}>
      <SearchBar onSearch={(ciudad) => alert(ciudad)}/>
      </header>
      <main className={styled.main}>
        <section className={styled.mainCity}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
          main = {true} 
        />
        </section>
        <section className={styled.otherCities}>
        <Cards cities={data}/>
      </section>
      </main>
    </div>
  );
}

export default App;
