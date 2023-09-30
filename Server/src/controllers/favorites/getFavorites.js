const {User, Favorite} = require('../../DB_connection')

const getFavorites = async (req,res) => {
    try {
        const {userId}=req.params;
        const user=await User.findByPk(userId);
        if(!user){
            return res.status(404).json({message:'User not found'})
        }

        const favorites=await User.findAll({
            where:{id:userId},
            include:[Favorite]
        })
        if(!favorites){
            return res.status(404).json({message:'Favorites not found'})
        }
        return res.status(200).json(favorites)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = getFavorites