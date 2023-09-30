import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";

import { addFav, removeFav } from '../../utils/favorites/callsFav.js';

export default function Cards(props) {
  const {characters, onClose} = props;

  return (
    <div className={style.cartas}>
      {characters.map((character,index)=>(
        <Card 
          key={index} 
          character={character} 
          onClose={onClose} 
          addFav={addFav} 
          removeFav={removeFav}
          
          />
      ))}
    </div>
  );
}