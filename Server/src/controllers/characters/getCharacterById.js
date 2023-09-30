const axios=require("axios")

const URL="http://rickandmortyapi.com/api/character/"

async function getCharacterById(req,res){
    try {
        const {id}=req.params
        const {data}= await axios.get(`${URL}/${id}`)
        const character={
            id:id,
            name:data.name,
            status:data.status,
            species:data.species,
            gender:data.gender,
            origin:data.origin?.name,
            location:data.location?.name,
            image:data.image,
        }
        
        if(character){
            return res.status(200).json(character)    
        }else throw Error('not found')
        
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

module.exports= getCharacterById