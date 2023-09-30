// import { connect } from "react-redux";//para trabajar con HOOKS no se utiliza
import { useSelector, useDispatch } from "react-redux";

import Cards from "../Cards/Cards";
import { orderCards, filterCards, resetFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import { getFav } from "../../utils/favorites/callsFav";

export default function Favorites(props){
  const {addFav,removeFav}=props
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user)
  const [favorites, setFavorites]=useState([])

  useEffect(()=>{
    if(user){
      setFavorites(getFav(user.id))
    }else{
      return(<div>Loading...</div>)
    }
  },[user])



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
        {['Male','Female','unknown','Genderless'].map((gender)=>(
           <option value={gender}>{gender}</option>
          ))}
      </select>
        
      <select placeholder="Order" onChange={handleSort}>
        {['Ascendente','Descendente'].map((order)=>(
          <option value={order}>{order}</option>
        ))}
      </select>

      <button onClick={handleReset}>Reset filters</button>

      <Cards characters={favorites} addFav={addFav} removeFav={removeFav} userId={user?.id}/>
    </div>  
  );
}
