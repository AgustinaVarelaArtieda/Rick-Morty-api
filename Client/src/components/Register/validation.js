let errors={}

function validar(newUser){
    
    if(!newUser.email) {
        errors.email="Debes ingresar un email"
    }else if(newUser.email.length>35) {
        errors.email="El email no puede tener más de 35 caracteres"
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newUser.email)) {
        errors.email="Debes ingresar un email válido"
    }else errors.email=null
    
    if(!newUser.password) {
        errors.password='Debes ingresar una contraseña'
    }else if(newUser.password.length<6||newUser.password.length>10) {
        errors.password='La contraseña debe tener entre 6 y 10 caracteres'
    }else if(!/^(?=.*\d).{6,10}$/.test(newUser.password)){
        errors.password='La contraseña debe incluir al menos un número'
    }else errors.password=null

    if(!newUser.newUsername){
        errors.newUsername='Debes ingresar un nombre de usuario'
    } else if (newUser.newUsername.length <4 || newUser.newUsername.length >10 ) {
        errors.newUsername='El nombre de usuario debe tener entre 4 y 10 caracteres'
    }else errors.newUsername=null

    return errors
}

export default validar