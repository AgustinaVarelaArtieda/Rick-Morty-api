const axios = require ("axios")

function getCharById(res,id){
    axios.get(`http://rickandmortyapi.com/api/character/${id}`)
    .then(response=>{
        const datos=response.data
        const character={
           id:id,
           name:datos.name,
           gender:datos.gender,
           species:datos.species,
           origin:datos.origin.name,
           image:datos.image,
           status:datos.status
        }
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(character))
    })
    .catch((err)=>{
        res.writeHead(500, {"content-type": "text/plain"});
        res.end(JSON.stringify(err.message))
    });
}

module.exports= getCharById