import axios from 'axios';

export const ADD_FAV='ADD_FAV';
export const REMOVE_FAV='REMOVE_FAV';
export const FILTER='FILTER';
export const ORDER='ORDER';
export const RESET='RESET';
export const USER='USER';

export const addFavorite=(character)=>{
    try{
        const endpoint='/favorites/add/';
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
        const endpoint='/fav/'+id;
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

export function user(info){
    return {
        type: USER,
        payload: info
    }
}