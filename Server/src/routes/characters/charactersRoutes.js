const {Router}=require("express")
const getCharacterById = require("../../controllers/characters/getCharacterById")

const character=Router()

character.get("/:id",getCharacterById)

module.exports=character