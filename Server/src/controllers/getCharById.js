const axios = require ("axios")

const URL = "http://rickandmortyapi.com/api/character/"

function getCharById(req,res){
    const id=req.params.id

    axios.get(`${URL}${id}`)
    .then(response=>{
        const datos=response.data
        if(id===datos.id){
            const character={
                id:id,
                name:datos.name,
                gender:datos.gender,
                species:datos.species,
                origin:datos.origin.name,
                image:datos.image,
                status:datos.status
            }
            res.status(200).json(character)     //para devolver un objeto como JSON}
        }else{
            res.status(404).json({message:"Not fount"})
        }
    })
    .catch((err)=>{
        res.status(500).json({message:err.message})
    });
}


//PROMISES
// function getCharById(res,id){
//     axios.get(`http://rickandmortyapi.com/api/character/${id}`)
//     .then(response=>{
//         const datos=response.data
//         const character={
//            id:id,
//            name:datos.name,
//            gender:datos.gender,
//            species:datos.species,
//            origin:datos.origin.name,
//            image:datos.image,
//            status:datos.status
//         }
//         res.writeHead(200, {"content-type": "application/json"});
//         res.end(JSON.stringify(character))
//     })
//     .catch((err)=>{
//         res.writeHead(500, {"content-type": "text/plain"});
//         res.end(JSON.stringify(err.message))
//     });
// }

module.exports= getCharById