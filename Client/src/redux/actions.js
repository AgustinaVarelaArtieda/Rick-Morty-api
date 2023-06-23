import axios from 'axios';

export const ADD_FAV='ADD_FAV';
export const REMOVE_FAV='REMOVE_FAV';
export const FILTER='FILTER';
export const ORDER='ORDER';
export const RESET='RESET'

//ADDFAV y REMOVEFAV ANTES DE EXPRESS
// export function addFavorite(character){
//     return {
//         type: 'ADD_FAV',
//         payload: character,
//     };
// }
// export function removeFavorite(id){
//     return {
//         type: 'REMOVE_FAV',
//         payload: id,
//     };
// }
//DESPUES DE EXPRESS

export const addFavorite=(character)=>{
    try{
        const endpoint='http://localhost:3001/rickandmorty/fav';
        return async (dispatch)=>{
            const {data}=await axios.post(endpoint,character)  //se envia una req de tipo POST 
            return dispatch({
                type:ADD_FAV,
                payload:data,
            });            
        };
          // eslint-disable-next-line no-unreachable
    }catch (error){
        console.log(error)  //en el FRONT no se debe hacer console.log, utilizar ALERTAS o redireccion de paginas
    }
};

export const removeFavorite=(id)=>{
    try {
        const endpoint='http://localhost:3001/rickandmorty/fav/'+id;
        return async (dispatch)=>{
            const {data}=await axios.delete(endpoint)
            return dispatch({
                type:REMOVE_FAV,
                payload:data,
            });
        };
    } catch (error) {
        console.log(error)
    }
};

export function filterCards(gender){
    return {
        type: FILTER,
        payload: gender,
    }
}

export function orderCards(orden){
    return {
        type: ORDER,
        payload: orden,
    }
}

export function resetFav(){
    return {
        type: RESET
    }
}