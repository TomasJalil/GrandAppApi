const cnx = require('./cnx');
const sql = require('mssql');
const temas = require('./temas');

//Trae listado de tema

async function getVideo(temaVideo){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('temaVideo', sql.Int,temaVideo)
        .query('select * from temas where temaVideo = @temaVideo');
return salida.recordsets
    }catch(err){
        console.log(err)
    }

}


module.exports={
    getVideo: getVideo,
}