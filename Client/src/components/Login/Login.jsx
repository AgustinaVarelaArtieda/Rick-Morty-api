import validar from '../Login/validation'
import { user } from '../../redux/actions'

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from "axios"

export default function Login(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    //creo un estado que guarde el email y password
    const [userData,setUserData]=useState({email:'',password:''})

    //creo un estado que guarde el error
    const [errors,setErrors]=useState({email:'',password:''})
    
    //para modificar el estado
    function handleChange(e){
        e.preventDefault();
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
        })
        //para ver si cumple con las validaciones
        setErrors(validar({
            ...userData,
            [e.target.name]:e.target.value,
        }));
    }   

    //para evitar que se refresque la pagina y para subir un nuevo usuario
    async function handleSubmit(e){
        e.preventDefault();
        if(!errors.email && !errors.password){
            const body={
                email:userData.email,
                password:userData.password
            }
            try {
                const response=await axios.post('/users/login',body)
                alert('Bienvenido')
                navigate('/home')
                localStorage.setItem('user', JSON.stringify(response.data.user));
        
                localStorage.setItem('token', response.data.token);
            } catch (error) {
                alert('Usuario no registrado')
                navigate('/register')
                console.log(error)
            }
        }else alert('Hay errores en el email o en el password')
    }

    return (
        <form>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Ingresa tu email" value={userData.email} name="email" onChange={handleChange}/>
                <span>{errors.email}</span>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Ingresa tu contraseña" value={userData.password} name="password" onChange={handleChange}/>
                <span>{errors.password}</span>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}