import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import style from './detail.module.css'

export default function Detail(){
    
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);

    return ( //AQUI se cambia como se renderiza la info
        <div className={style.detalle}>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <p>{character.location?.name}</p>
        </div>
    )
}