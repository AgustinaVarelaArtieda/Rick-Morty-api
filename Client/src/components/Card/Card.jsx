import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import style from './card.module.css'

export default function Card(props) {
   const navigate=useNavigate();
   const {character, onClose, addFav, removeFav}=props;

   const {id,name,status,species,gender,origin,image} = character

   const user=useSelector((state)=>state.user)

   const [closeBtn, setCloseBtn]=useState(true)

   const [isFav, setFav]=useState(false);

   useEffect(()=>{
      if(!onClose){
         setCloseBtn(false)
      }
   },[])

   function navigateHandler(){
      navigate(`/detail/${character.id}`);
   }

   

   function handleFavorite(userId){
      if(!isFav){
         const body={
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
         }
         addFav(userId,body);
         setFav(true);
      }else{
         removeFav(userId,id);
         setFav(false);
      }
   }
   return (    
      <div className={style.contenedor}>        
          {closeBtn && (<button onClick={()=>{onClose(character.id)}}>X</button>)}
         <h2>{name}</h2>
         <img src={image} alt={name} onClick={navigateHandler}/>
         {isFav ? (<button onClick={()=>handleFavorite(user.id)}>❤️</button>)
                : (<button onClick={()=>handleFavorite(user.id)}>🤍</button>)
         }
      </div>
   );
}
