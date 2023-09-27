import {ADD_FAV, FILTER, REMOVE_FAV, ORDER, RESET, USER} from "./actions";

let initialState = {
    user:{},
    myFavorites:[],
    allCharacters:[]
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case USER:
            return {
                ...state,
                user: action.payload
            }
            
        case ADD_FAV:
            //ANTES DE EXPRESS
            // const added=[...state.myFavorites, action.payload]
            // return {
            //     ...state,
            //     myFavorites: [...added],
            //     allCharacters: [...added]
            // }
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };

        case REMOVE_FAV:
            //ANTES DE EXPRESS
            //const remove = state.myFavorites.filter(character => character.id !== Number(action.payload))
            // return {
            //     //...state,
            //     myFavorites: [...remove],
            // }
            //DESPUES DE EXPRESS
            return { 
                ...state, 
                myFavorites: action.payload,
            };

        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter(
                    (character)=>character.gender===action.payload
                )
            }

        case ORDER:
            let ordenados=[];
            if(action.payload==='Ascendente'){
                ordenados=state.myFavorites.sort((a,b)=>a.id>b.id ? 1 : -1)
            } else if(action.payload==='Descendente'){
                ordenados=state.myFavorites.sort((a,b)=>b.id>a.id ? 1 : -1)
            }
            return{
                ...state,
                myFavorites:[...ordenados],
            }

        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters,   
            }

        default:
            return {
                ...state,
            };
    };
}

export default rootReducer;