const {Router} = require ("express")
const usersHandler = require("../../handlers/user/userHandler")
const infoHandler = require("../../handlers/user/infoHandler")

const user = Router()

user.get("/:id",infoHandler)
user.post("/login", usersHandler)   //necesita datos por body(email,password,username)

module.exports =  user
