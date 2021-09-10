console.log('inicio del proceso');

const TemasWS = require('./TemasWS');
const Temas = require('./Temas');

const UsuarioWs=require('./UsuarioWs');
const Usuario=require('./Usuario');

var express = require('express');
var cors=require('cors');
const { request, response } = require('express');
const VideosWS = require('./VideosWS');


var app= express();
var router= express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/API',router);


//Ruta para obtener los temas
router.route('/temas').get((request, response)=>{
    TemasWS.getTemas().then(result => {
        response.json(result[0])
    }) 
});

//Ruta para insertar un tema
router.route('/temas/nuevo').post((request, response)=>{
    let tema={...request.body}
    TemasWS.newTema(tema).then(result => {
        response.json('se ha registrado correctamente');
    });(err)=>{
        console.log(err.message);
        response.json(err.message);
    }
});
//Ruta para insertar nuevo usuario
router.route('/user/nuevo').post((request, response)=>{
    let usuario={...request.body}
    UsuarioWs.newUsuario(usuario).then(result => {
        response.json('se ha registrado correctamente');
    });(err)=>{
        console.log(err.message);
        response.json(err.message);
    }
});

//Ruta para obtener los temas
router.route('/user').get((request, response)=>{
    UsuarioWs.getUsuarios().then(result => {
        response.json(result[0])
    }) 
});

// Ruta para obtener todos los videos
router.route('/videos').get((request, response)=>{
    VideosWS.getVideos().then(result => {
        response.json(result[0])
    }) 
});


// Ruta para obtener los videos de X categoria
router.route('/videos/:temaVideos').get((request,response)=>{
    VideosWS.getVideo(request.params.temaVideos).then(result => {
        response.json(result[0])
    })
});
//Ruta para obtener X tema
router.route('/temas/:nombre').get((request,response)=>{
    TemasWS.getTema(request.params.nombre).then(result => {
        response.json(result[0])
    })
});

var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
console.log('fin del proceso')