const {User}=require('../../DB_connection')
const jwt=require('jsonwebtoken')
const {SECRET_KEY}=process.env

const users=async (email,password)=>{
    const user=await User.findOne({
        where:{email,password},
    })

    if(user){
        const token=jwt.sign({userId:user.id}, SECRET_KEY, {expiresIn:'1h'})

        return {status:200, data:{ message:'Usuario encontrado ', user, token}}
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
    const token=jwt.sign({userId:newUser.id}, SECRET_KEY, {expiresIn:'1h'})

    return {status:201, data:{ message:'Usuario creado con exito ', newUser, token}}
}

module.exports={users, newUser}