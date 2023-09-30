const {Router}=require('express');

const user=require('./users/usersRoutes');
const character = require('./characters/charactersRoutes');
const favorites = require('./favorites/favoritesRoutes');

const mainRouter= Router(); 

//user routes
mainRouter.use('/users',user)
mainRouter.use('/character',character)
mainRouter.use('/favorites',favorites)

module.exports = mainRouter