const {User, Favorite} = require('../../DB_connection')

const addFavoriteCharacter=async(req,res)=>{
    try {
        const {userId}=req.params;
        const {id,name,status,species,gender,origin,image}=req.body

        const user=await User.findByPk(userId);
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        
        const favorite=await User.findOne({
            where:{
                id:userId,
            },
            include:[{
                model: Favorite,
                where:{id}
            }]
        })

        if(favorite){
            return res.status(400).json({message:'Character already in favorites'})
        }else{

            const newFavorite=await Favorite.create({
                id,name,status,species,gender,origin,image
            })
            
            await newFavorite.addUser(user)
        }

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

module.exports=addFavoriteCharacter