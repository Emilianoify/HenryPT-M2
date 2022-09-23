import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities.map(ciudad  => (
          <Card
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
          key={ciudad.id}
        />
      ))}
    </div>
  )
};

//Como lo hice yo

//cities.map((ciudad) => (
//  <Card max={ciudad.main.temp_max} min={ciudad.main.temp_min} name={ciudad.name} img={ciudad.weather[0].icon} key={ciudad.id} />
  
//))