let errors={}

function validar(user){
    
    if(!user.email) {
        errors.email="Debes ingresar un email"
    }else if(user.email.length>35) {
        errors.email="El email no puede tener más de 35 caracteres"
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)) {
        errors.email="Debes ingresar un email válido"
    }else errors.email=null
    
    if(!user.password) {
        errors.password='Debes ingresar una contraseña'
    }else if(user.password.length<6||user.password.length>10) {
        errors.password='La contraseña debe tener entre 6 y 10 caracteres'
    }else if(!/^(?=.*\d).{6,10}$/.test(user.password)){
        errors.password='La contraseña debe incluir al menos un número'
    }else errors.password=null

    return errors
}

export default validar