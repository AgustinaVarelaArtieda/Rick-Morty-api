import validar from '../Login/validation'

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Login(){
    const navigate=useNavigate()
    //creo un estado que guarde el email y password
    const [user,setUser]=useState({email:'',password:''})

    //creo un estado que guarde el error
    const [errors,setErrors]=useState({email:'',password:''})
    
    //para modificar el estado
    function handleChange(e){
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
        //para ver si cumple con las validaciones
        setErrors(validar({
            ...user,
            [e.target.name]:e.target.value,
        }));
    }   

    //para evitar que se refresque la pagina y para subir un nuevo usuario
    async function handleSubmit(e){
        e.preventDefault();
        if(!errors.email && !errors.password){
            const body={
                email:user.email,
                password:user.password
            }
            try {
                await axios.post('/users/login',body)
                alert('Bienvenido')
                navigate('/home')
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
                <input type="email" placeholder="Ingresa tu email" value={user.email} name="email" onChange={handleChange}/>
                <span>{errors.email}</span>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Ingresa tu contraseña" value={user.password} name="password" onChange={handleChange}/>
                <span>{errors.password}</span>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}