const getFavorites = require('../../controllers/favorites/getFavorites')
const addFavoriteCharacter = require('../../controllers/favorites/addFavorite')
const deleteFavoriteCharacter = require('../../controllers/favorites/deleteFavorite')

const favsHandler=async(req,res)=>{
    try {
       await getFavorites(req,res)
    } catch (error) {
        return res.status(500).json({ message: 'Error en el handler al mostrar favoritos', error });
    }
}

const addFavsHandler=async(req,res)=>{
    try {
        await addFavoriteCharacter(req,res)
    } catch (error) {
        return res.status(500).json({ message: 'Error en el handler para agregar a favorito', error });
    }
}

const removeFavsHandler=async(req,res)=>{
    try {
        await deleteFavoriteCharacter(req,res)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports={
    favsHandler,
    addFavsHandler,
    removeFavsHandler
}