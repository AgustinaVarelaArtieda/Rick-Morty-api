const {User}=require('../../DB_connection')

const users=async (email,password)=>{
    const user=await User.findOne({
        where:{email,password},
    })

    if(user){
        return {status:200, data:{ message:'Usuario encontrado ', user}}
    }else{
        return {status:404, data:{ message:'Usuario no encontrado '} }
    }
    
}

const newUser=async(email,password, username)=>{
    
    const newUser=await User.create({
        email,
        password,
        username
    })
    return {status:201, data:{ message:'Usuario creado con exito ', newUser}}
    
}

module.exports={users, newUser}