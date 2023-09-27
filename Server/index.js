const server=require("./src/app")
const { conn } = require('./src/DB_connection');

const { PORT } = process.env;

require('dotenv').config();

conn.sync({force:false});

server.listen(PORT,()=>{
   console.log('Server raised in port: ' + PORT);
});