const {User, Favorite} = require('../../DB_connection')

const deleteFavoriteCharacter=async(req,res)=>{
    try {
        const {userId,id}=req.params;

        console.log(userId)
        console.log(id)

        const user=await User.findByPk(userId);
        const favorite=await Favorite.findByPk(id)
        
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        if(!favorite){
            return res.status(404).json({message:'Favorite not found'})
        }else{
            await user.removeFavorite(favorite)
            return res.status(200).json({message:'Favorite deleted'})
        }
        
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

module.exports=deleteFavoriteCharacter