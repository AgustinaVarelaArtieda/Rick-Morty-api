import SearchBar from "../SearchBar/SearchBar";

import { NavLink, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

import style from "./Nav.module.css"

export default function Nav({onSearch,random}){

    const[mostrarBusqueda,setMostrarBusqueda] = useState(false)
    const location = useLocation()

    useEffect(() =>{
        if(location.pathname === "/home"){
            setMostrarBusqueda(true)
        } else if (location.pathname === "/cards"){
            setMostrarBusqueda(true)
         } else {
            setMostrarBusqueda(false)
        }
    },[location] )

    return(
        <div className={style.nav}>
            <div>
                <NavLink to='/home'>
                    <button>Home</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/about'>
                    <button>About</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/favorites'>
                    <button>Favorites</button>
                </NavLink>
            </div>

            {mostrarBusqueda&&<SearchBar onSearch={onSearch} random={random}/>}

        </div>
    );
}
