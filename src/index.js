import express from 'express';
import mysql from 'mysql2/promise';
import os from "os";

const app = express();
const port = 4000;

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'admin1234',
  database: process.env.MYSQL_DATABASE || 'application-cloud'
};

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM livros');
    res.json(rows);
    await connection.end();
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.get('/liveness', (req, res) => {
    // retorna se a aplicação está viva (disponivel)
    return res
    .status(200)
    .json({
        status: true,
        message: "Meu servidor funciona!",
        path: process.cwd(),
        gid: "",
        uid: "",

    });
});
app.get('/readiness', (req, res) => {
    // retorna se a aplicaçãoestá pronta (todos os componenntes disponiveis para executar funções de suas responsb.)
    return res
    .status(200)
    .json({
        status: true,
        mensagem: "Minha aplicação está pronta!",
        platform: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir(),
        
    });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});