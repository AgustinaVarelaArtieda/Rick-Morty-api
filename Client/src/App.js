import './App.css';
import style from './App.module.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/about';
import Detail from './components/Detail/detail';
import ErrorPage from './components/ErrorPage/errorPage';
import Form from './components/Form/form';
import Favorites from './components/Favoritos/favorites';

import axios from 'axios';

import { useState, useEffect } from 'react';      //para crear estados LOCALES 
import { Route, Routes, useLocation, NavLink, useNavigate} from 'react-router-dom';


// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };
   
function App() {
   //BORRAR ESTA FUNCION DE ABAJO Y REEMPLAZARLA...
   //const onSearch = (id) =>{   //y una funcion que se encarga de modificarlo
   //   setCharacters([...characters, example])   //seteamos con una copia de todo lo que ya tiene el estado
   //}
      
   //destructuramos [ESTADO, FUNCION SETEADORA DEL ESTADO]
   const [characters, setCharacters] = useState([]);     //el useState recibe un estado INICIAL
   const location=useLocation()

   //invoco el useNavigation
   const navigate=useNavigate();
   //creo un estado local ACCESS
   const [access,setAccess]=useState(false)
   //creo parámetros fijos para loguearme
   const EMAIL="agusvarela5@gmail.com";
   const PASSWORD="agus123";

   //Funcion LOGIN
   function loginHandler(data){
      if(data.email===EMAIL && data.password===PASSWORD){
         setAccess(true)
         navigate('/home')
         }else{
            alert("Datos incorrectos")
            }
   }

   //Para verificar si estas logueado
   useEffect(() => {
      !access && navigate("/");
   }, [access]);
   
   //Funcion para BUSCAR 
   function searchHandler(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if(!characters.find((char)=>char.id===data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            }else {
               window.alert("Ya agregaste este personaje!");
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }})
   }
 
   
   //Funcion para CERRAR CARD
   function closeHandler (id) {    
      let deleted = characters.filter((character) => character.id !== Number(id));
      
      //extra de react-redux: removeFavorite(id); o esperar a usar HOOKS
      
      setCharacters(deleted);
   }
   
   //Funcion para boton RANDOM
   function randomHandler() {     
      let haveIt=[] 
      let random=Math.floor(Math.random()*826)    //genero un numero random entre 0-826 y lo redondeo
      
      if(!haveIt.includes(random)){    //si el array no incluye el numero random
         haveIt.push(random);          //lo agrego al array y lo muestro
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
           if (data.name&&!characters.find((char)=>char.id===data.id)) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert("Ya agregaste este personaje!");
            }
         });
      } else return false
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
               element={<Cards characters={characters} onClose={closeHandler}/>}
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