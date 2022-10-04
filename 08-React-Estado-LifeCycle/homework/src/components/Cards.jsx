import React from 'react';
import Card from './Card.jsx';
import styled from './Cards.module.css';

export default function Cards({ cities, onClose }) {

    return (
      <div className={styled.cardsContainer}>
        {cities.map((ciudad) =>
         (<Card
            max={ciudad.max}
            min={ciudad.min}
            name={ciudad.name}
            img={ciudad.img}
            onClose={() => onClose(ciudad.id)}
            key={ciudad.id}
          />))}
      </div>
    );
  }