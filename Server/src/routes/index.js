const Router=require('express');
const mainRouter=Router();

const getCharById=require('../controllers/getCharById');
const login=require('../controllers/login');
const postFav=require('../controllers/handleFavorites');
const deleteFav=require('../controllers/handleFavorites');

mainRouter.get('/character/:id',getCharById);
mainRouter.get('/login',login);
mainRouter.post('/favorites',postFav);
mainRouter.delete('/favorites/:id',deleteFav);

module.exports=mainRouter