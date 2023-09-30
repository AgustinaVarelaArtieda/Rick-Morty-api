import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";
import { useState, useEffect } from 'react';

import { addFav, removeFav } from '../../utils/favorites/callsFav.js';

export default function Cards(props) {
  const {characters, onClose, isFavorite, fetchFavorites} = props;

  useEffect(()=>{
    fetchFavorites();
  },[])

  return (
    <div className={style.cartas}>
      {characters!==null? characters?.map((character,index)=>(
        <Card 
          key={index} 
          character={character} 
          onClose={onClose} 
          addFav={addFav} 
          removeFav={removeFav}
          
          isFavorite={isFavorite}
          />
      )):(
        <h1>No tienes personajes agregados</h1>
      )}
    </div>
  );
}