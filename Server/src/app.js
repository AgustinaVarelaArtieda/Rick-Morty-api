const express = require('express');
const cors=require('cors')
const app = express();

const mainRouter=require('./routes');

// Middleware para habilitar CORS
app.use(cors());

//MIDDLEWARE
app.use((req, res, next) => {
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

app.options('/rickandmorty/users/login', (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());

app.use('/rickandmorty',mainRouter)

module.exports= app