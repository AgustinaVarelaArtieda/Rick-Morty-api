import './App.css';
import style from './App.module.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/about';
import Detail from './components/Detail/detail';
import ErrorPage from './components/ErrorPage/errorPage';
import Favorites from './components/Favoritos/favorites';

import axios from 'axios';

import { useState, useEffect } from 'react';      //para crear estados LOCALES 
import { Route, Routes, useLocation, NavLink, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
   
function App() { 
   //destructuramos [ESTADO, FUNCION SETEADORA DEL ESTADO]
   const [characters, setCharacters] = useState([]);     //el useState recibe un estado INICIAL

   const location=useLocation()
   //invoco el useNavigation
   const navigate=useNavigate();
   //para botón close
   const dispatch=useDispatch()
   
   //Funcion para BUSCAR 
   async function searchHandler(id) {
      try {
         const {data}=await axios(`/character/${id}`)
         if (data.name) {
            if(!characters.find((char)=>char.id===data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            }else {
               alert("Ya agregaste este personaje!");
            }
         } else {
            alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.log('error en el front ',error)
      }
   }
 
   //Funcion para CERRAR CARD
   function onClose(id){
      setCharacters(characters.filter((character)=>character.id !== Number(id)))
      alert('personaje eliminado')
   }

   //Funcion para boton RANDOM
   async function randomHandler() {   
      let haveIt=[] 
      let random=Math.floor(Math.random()*826)    //genero un numero random entre 0-826 y lo redondeo
      try {
         if(!haveIt.includes(random)){    //si el array no incluye el numero random
            haveIt.push(random);          //lo agrego al array y lo muestro
            const {data}= await axios(`/character/${random}`)
            if (data.name && !characters.find((char)=>char.id===data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert("Personaje agregado!");
            }
         } else return false
      } catch (error) {
         console.log('error en el front',error)
      }  
   }
    

   return (  //renderizado de los elementos que se muestran en la página
      <div className={style.App}>
         <NavLink to="/home" style={{textDecoration:"none"}}>
         <h1>Rick and Morty</h1>
         </NavLink>

         {location.pathname !== '/' && 
         <Nav onSearch={searchHandler} random={randomHandler}/>}

         <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route 
               path='/home' 
               element={<Cards characters={characters} onClose={onClose}/>}
            />
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>  
      </div>
   );
}

export default App;