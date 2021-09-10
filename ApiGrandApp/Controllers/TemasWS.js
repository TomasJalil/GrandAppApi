const cnx = require('../cnx');
const sql = require('mssql');
const temas = require('../Models/temas');

//Trae listado de tema

async function getTemas(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from temas');
return salida.recordsets
    }catch(err){
        console.log(err)
    }

}

//Inserta un nuevo tema

async function newTema(tema){
    try{
        let pool = await sql.connect(cnx);
        let newTema = await pool.request()
        .input('idTema',sql.Int, temas.idTema_Temas)
        .input('nombre',sql.Text, temas.nombre_Temas)
        .execute('pr_newTema');
        
    }catch(err){
        console.log(err)
    }

}


module.exports={
    getTemas: getTemas,
    newTema: newTema
}