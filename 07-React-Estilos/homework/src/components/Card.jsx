import React from 'react';
import Temp from './Temp'
import c from './Card.module.css'

export default function Card({ max, min, name, img, onClose, main }) {
  // acá va tu código

  return (
    <div className={[c.container, main ? c.mainCard : ''].join(' ')}>
      <span className={c.title}>{name}</span>
      <button className={c.closeButton} onClick={onClose}>X</button>
      <section>
        <Temp className={c.temp} label="Min" value={min} />
        <Temp className={c.temp} label="Max" value={max} />
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />
      </section>
    </div>
  )
};