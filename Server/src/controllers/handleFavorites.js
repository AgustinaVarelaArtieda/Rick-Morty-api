let myFavorites=[];

function postFav(req,res){
    myFavorites.push(req.body);
    res.json(myFavorites)
}

function deleteFav(req,res){
    myFavorites.splice(req.params.id,1);
    res.json(myFavorites)
}

module.exports= deleteFav,postFav