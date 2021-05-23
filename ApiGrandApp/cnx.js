const cnx={
    user:'Api',
    password:'admin',
    server:'DESKTOP-74BV394',
    database:'GRANDAPP',
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