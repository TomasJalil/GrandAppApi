const cnx = require('./cnx');
const sql = require('mssql');
const Temas = require('./Temas');

//Trae listado de tema

async function getTemas(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from temas');
        console.log(salida.recordsets);
    return salida.recordsets;
    }catch(err){
        console.log(err)
    }

}

async function getTema(nombre){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('nombre', sql.Text,nombre)
        .query('select * from temas where nombre LIKE @nombre');
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
          .input('nombre',sql.Text, tema.nombre)
          .execute('pr_newTema');
        return newTema.recordsets;
    }catch(err){
throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);    }

}

module.exports={
    getTemas: getTemas,
    newTema: newTema,
    getTema: getTema,
}