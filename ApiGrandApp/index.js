console.log('inicio del proceso');

const TemasWS = require('./TemasWS');
const temas = require('./temas');


var express = require('express');
var cors=require('cors');
const { request, response } = require('express');

var app= express();
var router= express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/API',router);


//Ruta para obtener los temas
router.route('/temas').get((request,response)=>{
    TemasWS.getTemas().then(result => {
        response.json(result[0])
    })
});

//Ruta para insertar un tema
router.route('/tema/nuevo').post((request,response)=>{
    let tema={...request.body}
    TemasWS.newTema(tema).then(result => {
        response.json(result[0])
    })
});



var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
console.log('fin del proceso')