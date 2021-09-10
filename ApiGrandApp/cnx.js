require('dotenv').config()
const cnx={
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    server:process.env.DB_SERVER,
    database:process.env.DB_DATABASE,
    port: 1433,
    dialect: "mssql",
    

    
options:{
    trustedconection: true,
    enableArithAbort: true,
    encrypt: false,
    trustServerCertificate: true,
    }
}


module.exports=cnx;