import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { addFavorite, removeFavorite } from '../../redux/actions';

import style from './card.module.css'

function Card(props) {
   const navigate=useNavigate();
   const {character, onClose, addFavorite, removeFavorite, favorites}=props;
   const {image, name, id} = character
   const [closeBtn, setCloseBtn]=useState(true)
   const [isFav, setFav]=useState(false);

   useEffect(()=>{
      if(!onClose){
         setCloseBtn(false)
      }
   },[])

   useEffect(() => {
      // if(favorites.length > 0){
      //    const fav = favorites.find(fav => fav.id === character.id);
      //    if(fav){
      //       setFav(true);
      //    }
      // }
      favorites.forEach((fav) => {     
         if (fav.id=== id) {    
            setFav(true);
         }
      });
   }, [favorites]);

   function navigateHandler(){
      navigate(`/detail/${character.id}`);
   }

   function handleFavorite(character){
      if(!isFav){
         addFavorite(character);
         setFav(true);
      }else{
         removeFavorite(character);
         setFav(false);
      }
   }

   return (    
      <div className={style.contenedor}>        
          {closeBtn && (<button onClick={()=>{onClose(character.id)}}>X</button>)}
         <h2>{name}</h2>
         <img src={image} alt={name} onClick={navigateHandler}/>
         {isFav ? (<button onClick={()=>handleFavorite(character.id)}>❤️</button>)
                : (<button onClick={()=>handleFavorite(character)}>🤍</button>)
         }
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return {
      addFavorite:(character)=>dispatch(addFavorite(character)),
      removeFavorite:(id)=>dispatch(removeFavorite(id)),
   };
};

const mapStateToProps=(state)=>{
   return {
      favorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)