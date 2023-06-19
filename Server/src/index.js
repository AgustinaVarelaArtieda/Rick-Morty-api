//EXPRESS
const express = require('express');
const server = express();

const mainRouter=require('./routes/index')

const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

//MIDDLEWARE
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json);

 server.use('/rickandmorty',mainRouter)

//PROMISES
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