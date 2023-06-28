//EXPRESS
const server=require("./app")

const { conn } = require('./DB_connection');

const PORT=3001;

conn.sync({force:true});

server.listen(PORT,()=>{
   console.log('Server raised in port: '+PORT);
});

//PROMISES y WEB SERVER
// const http = require("http");
// const getCharById = require ("./controllers/getCharById")

// http
//   .createServer((req, res) => {
//     const {url} = req; // /rickandmorty/character/1

//     res.setHeader("Access-Control-Allow-Origin", "*");

//     //WEB SERVER(faltan las importaciones)
//     // if (url.includes("rickandmorty/character")) {
//     //   let urlId = url.split("/").pop(); // ["rickandmorty" ,"character","1"]
//     //   let found = characters.find(
//     //     (character) => character.id === Number(urlId)
//     //   );

//     //   res.writeHead(200, {"content-type": "application/json"});
//     //   res.end(JSON.stringify(found));
//     // }

//     //PROMISES
//     if (url.includes("rickandmorty/character")) {
//         let id = url.split("/").pop();
//         getCharById(res,id);
//     }
//   })

//   .listen(3001);