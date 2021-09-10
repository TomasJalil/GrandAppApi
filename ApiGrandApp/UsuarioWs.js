const cnx = require('./cnx');
const sql = require('mssql');
const Usuario = require('./Usuario');


async function getUsuarios(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from usuarios');
        console.log(salida.recordsets);
    return salida.recordsets;
    }catch(err){
        console.log(err)
    }

}

async function newUsuario(usuario){
    try{
        let pool = await sql.connect(cnx);
        let newUsuario = await pool.request()
          .input('Nombre',sql.Text, usuario.Nombre)
          .input('Correo',sql.Text, usuario.Correo)
          .execute('_pr_newUsuario');
        return newUsuario.recordsets;
    }catch(err){
throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);    }

}

module.exports={
    newUsuario: newUsuario,
    getUsuarios: getUsuarios,
}