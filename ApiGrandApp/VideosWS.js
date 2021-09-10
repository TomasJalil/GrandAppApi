const cnx = require('./cnx');
const sql = require('mssql');
const videos = require('./Videos');

//Trae listado de tema

async function getVideos(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from videos');
        console.log(salida.recordsets);
    return salida.recordsets;
    }catch(err){
        console.log(err)
    }

}
async function getVideo(temaVideos){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('temaVideos', sql.Int,temaVideos)
        .query('select * from videos where temaVideos LIKE @temaVideos');
return salida.recordsets
    }catch(err){
        console.log(err)
    }

}




module.exports={
    getVideos: getVideos,

    getVideo: getVideo,
}