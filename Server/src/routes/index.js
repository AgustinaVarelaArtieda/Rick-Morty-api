const {Router}=require('express');

const getCharById=require('../controllers/getCharById');
const login=require('../controllers/login');
const {postFav,deleteFav}=require('../controllers/handleFavorites');

const user=require('./users/usersRoutes')

const mainRouter= Router(); 

mainRouter.get('/character/:id',getCharById);
mainRouter.get('/login',login);
mainRouter.post('/fav',postFav);
mainRouter.delete('/fav/:id',deleteFav);
//user routes
mainRouter.use('/users',user)

module.exports = mainRouter