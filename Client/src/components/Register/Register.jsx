import validar from '../Register/validation'
import { user } from '../../redux/actions'

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import axios from "axios"

export default function Register(){
    const navigate=useNavigate()

    const dispatch = useDispatch();

    //creo un estado que guarde el email y password
    const [newUser,setNewUser]=useState({email:'',password:'',username:''})

    //creo un estado que guarde el error
    const [errors,setErrors]=useState({email:'',password:'',username:''})
    
    //para modificar el estado
    function handleChange(e){
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value,
        })
        //para ver si cumple con las validaciones
        setErrors(validar({
            ...newUser,
            [e.target.name]:e.target.value,
        }));
    }   

    //para evitar que se refresque la pagina y para subir un nuevo usuario
    async function handleSubmit(e){
        e.preventDefault();
        if(!errors.email && !errors.password && !errors.username){
            const body={
                email:newUser.email,
                password:newUser.password,
                username:newUser.username
            }
            try {
                const response=await axios.post('/users/login',body)
                alert('Usuario creado con exito! Bienvenido!')
                navigate('/home')
                localStorage.setItem('user', response.data.user);
                localStorage.setItem('token', response.data.token);
            } catch (error) {
                alert('Ocurrio un error al crear el usuario')
                console.log(error)
            }
        }else alert('Completa correctamente los campos!')
    }

    return (
        <form>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Ingresa tu email" value={newUser.email} name="email" onChange={handleChange}/>
                <span>{errors.email}</span>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Ingresa tu contraseña" value={newUser.password} name="password" onChange={handleChange}/>
                <span>{errors.password}</span>
            </div>
            <div>
                <label>Username</label>
                <input type="text" placeholder="Ingresa tu nombre de usuario" value={newUser.username} name="username" onChange={handleChange}/>
                <span>{errors.username}</span>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}