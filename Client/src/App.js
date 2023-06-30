import './App.css';
import style from './App.module.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/about';
import Detail from './components/Detail/detail';
import ErrorPage from './components/ErrorPage/errorPage';
import Form from './components/Form/form';
import Favorites from './components/Favoritos/favorites';
import { removeFavorite } from './redux/actions';

import axios from 'axios';

import { useState, useEffect } from 'react';      //para crear estados LOCALES 
import { Route, Routes, useLocation, NavLink, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
   
function App() { 
   //destructuramos [ESTADO, FUNCION SETEADORA DEL ESTADO]
   const [characters, setCharacters] = useState([]);     //el useState recibe un estado INICIAL
   //creo un estado local ACCESS
   const [access,setAccess]=useState(false)

   const location=useLocation()
   //invoco el useNavigation
   const navigate=useNavigate();
   //para botón close
   const dispatch=useDispatch()

   //creo parámetros fijos para loguearme-ANTES DE EXPRESS
   // const EMAIL="agusvarela5@gmail.com";
   // const PASSWORD="agus123";

   //Funcion LOGIN - ANTES DE EXPRESS
   // function loginHandler(data){
   //    if(data.email===EMAIL && data.password===PASSWORD){
   //       setAccess(true)
   //       navigate('/home')
   //       }else{
   //          alert("Datos incorrectos")
   //          }
   // }
   
   //Funcion LOGIN - CON EXPRESS
   async function loginHandler(userData) {
      try {
         const {email, password}=userData;

         const URL='http://localhost:3001/rickandmorty/login';
         
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
         const {access}=data;
            setAccess(data);
            access && navigate('/home');
      } catch (error) { //averiguar mensajes de error, alertas, etc
         console.log(error)
      }
   }

   //Para verificar si estas logueado
   useEffect(() => {
      !access && navigate("/");
   }, [access]);
   
   //Funcion para BUSCAR 
   async function searchHandler(id) {
      try {
         const {data}=await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            if(!characters.find((char)=>char.id===data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            }else {
               window.alert("Ya agregaste este personaje!");
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.log(error)
      }
   }
 
   //Funcion para CERRAR CARD
   function onClose(id){
      setCharacters(characters.filter((character)=>character.id !== Number(id)))

      dispatch(removeFavorite(id));
   }
   
   //Funcion para boton RANDOM
   async function randomHandler() {   
      let haveIt=[] 
      let random=Math.floor(Math.random()*826)    //genero un numero random entre 0-826 y lo redondeo
      try {
         if(!haveIt.includes(random)){    //si el array no incluye el numero random
            haveIt.push(random);          //lo agrego al array y lo muestro
            const {data}= await axios(`http://localhost:3001/rickandmorty/character/${random}`)
            if (data.name && !characters.find((char)=>char.id===data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert("Personaje agregado!");
            }
         } else return false
      } catch (error) {
         console.log(error)
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
            <Route path="/" element={<Form login={loginHandler}/>} />
            <Route 
               path='/home' 
               element={<Cards characters={characters} onClose={onClose}/>}
            />
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>  
      </div>
   );
}

export default App;