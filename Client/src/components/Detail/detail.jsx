import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import style from './detail.module.css'

export default function Detail(){
    
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        <div>
          <div>
            <h3>Species:</h3>
            <p>{character.species}</p>
          </div>
          <div>
            <h3>Gender:</h3>
            <p>{character.gender}</p>
          </div>
          <div>
            <h3>Status:</h3>
            <p>{character.status}</p>
          </div>
          <div>
            <h3>Origin:</h3>
            <p>{character.origin}</p>
          </div>
          <div>
            <h3>Location:</h3>
            <p>{character.location}</p>
          </div>
        </div>
      </div>
    )
}