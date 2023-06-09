import { useState } from 'react';

import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch,random}=props
   
   const [id, setId] = useState('');

   const handleChange = (e) => {
      
      e.preventDefault();

      let input = e.target.value;
      
      setId(input);    //esta es la unica forma en la que se puede modificar el ESTADO local, lo que esta entre () es el input(id)
   }

   return (
      <div className={style.barra}>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={()=>{onSearch(id)}}>Agregar</button> 
         <button className="random" onClick={random}>ADD RANDOM</button>
      </div>
   );
}