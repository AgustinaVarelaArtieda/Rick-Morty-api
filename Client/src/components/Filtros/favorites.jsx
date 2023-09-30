// import { connect } from "react-redux";//para trabajar con HOOKS no se utiliza
import { useSelector, useDispatch } from "react-redux";

import { orderCards, filterCards, resetFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import { getFav } from "../../utils/favorites/callsFav";
import Cards from "../Cards/Cards";

export default function Favorites(props){

  const dispatch=useDispatch();

  const {favorites, isFavorite,fetchFavorites }=props

  
  function handleSort(e){
    dispatch(orderCards(e.target.value))
  }

  function handleFilter(e){
    dispatch(filterCards(e.target.value))
  }

  function handleReset(){
    dispatch(resetFav());
  }

  return(
    <div>
      <select placeholder="Gender" onChange={handleFilter}> 
        {['Male','Female','unknown','Genderless'].map((gender,index)=>(
           <option value={gender} key={index}>{gender}</option>
          ))}
      </select>
        
      <select placeholder="Order" onChange={handleSort}>
        {['Ascendente','Descendente'].map((order,index)=>(
          <option key={index} value={order}>{order}</option>
        ))}
      </select>

      <button onClick={handleReset}>Reset filters</button>

      <Cards characters={favorites} isFavorite={isFavorite} fetchFavorites={fetchFavorites}/>
    </div>  
  );
}
