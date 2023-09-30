const {Router}=require('express')

const {favsHandler,addFavsHandler,removeFavsHandler}=require('../../handlers/favorites/favoritesHandlers')

const favorites=Router()

favorites.get('/:userId',favsHandler)
favorites.post('/add/:userId',addFavsHandler)
favorites.delete('/rem/:userId/:id',removeFavsHandler)

module.exports=favorites