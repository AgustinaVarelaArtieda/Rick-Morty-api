const {User}=require('../../DB_connection')

const infoUser=async(id)=>{
    const user=await User.findByPk(id)
    if(!user){
        return {status:404,message:'User not found'}
    }

    return user
}

module.exports=infoUser