const axios=require("axios")

const URL="http://rickandmortyapi.com/api/character/"

async function getCharById(req,res){
    try {
        const {id}=req.params
        const {data}= await axios.get(`${URL}/${id}`)
        const character={
            id:id,
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.origin?.name,
            image:data.image,
            status:data.status,
            location:data.location?.name
        }
        
        if(character.name){
            res.status(200).json(character)     //para devolver un objeto como JSON}
        }else res.status(404).send("Not fount")
        
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}   
    //EXPRESS
    // const {id}=req.params
    // axios.get(`${URL}/${id}`)
    // .then((response)=>response.data)
    // .then(data=>{
    //     const character={
    //         id:id,
    //         name:data.name,
    //         gender:data.gender,
    //         species:data.species,
    //         origin:data.origin?.name,
    //         image:data.image,
    //         status:data.status
    //     }

    //     if(character.name){
    //         res.status(200).json(character)     //para devolver un objeto como JSON}
    //     }else{
    //         res.status(404).send("Not fount")
    //     }
    // })
    // .catch((err)=>{
    //     res.status(500).json({message:err.message})
    // });


//PROMISES
// function getCharById(res,id){
//     axios.get(`http://rickandmortyapi.com/api/character/${id}`)
//     .then(response=>{
//         const data=response.data
//         const character={
//            id:id,
//            name:data.name,
//            gender:data.gender,
//            species:data.species,
//            origin:data.origin.name,
//            image:data.image,
//            status:data.status
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