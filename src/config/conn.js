import mysql from "mysql2"

const conn = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Sen@iDev77!.",
    database: "evento",
    port: "3306"
})

conn.query((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});
  
export default conn;