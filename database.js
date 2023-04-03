var mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'mysql123sql',
    database:'mydb'
})

module.exports=pool;