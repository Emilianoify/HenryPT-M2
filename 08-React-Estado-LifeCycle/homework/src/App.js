import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import styled from './App.module.css'

function App() {
  const [cities, setCities] = React.useState([])

  const apiKey = process.env.REACT_APP_APIKEY
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          const exist = cities.find((c) => c.id === ciudad.id);
          if(!exist){
            setCities(oldCities => [...oldCities, ciudad]);
          } else{
            alert("Cannot add city, because you have the city")
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className={styled.app}>
      <header>
        <Nav onSearch={onSearch} />
      </header>
      <main className={styled.main}>
        <section className={styled.mainCity}>
          {cities.length ? (
          <Card
            max={cities[cities.length - 1].max}
            min={cities[cities.length - 1].min}
            name={cities[cities.length - 1].name}
            img={cities[cities.length - 1].img}
            main={true}
          />
          ) : (<span className={styled.alerta}>No hay ciudades</span>)}
        </section>
        <section className={styled.otherCities}>
          <Cards cities={cities} onClose={onClose} />
        </section>
      </main>
    </div>
  );
}

export default App;