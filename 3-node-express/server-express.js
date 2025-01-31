// importação da biblioteca Express
// para instalar rodo o comando: npm install express
const express = require('express')

// instalação: npm install body-parser
const bodyParser = require('body-parser');

// criação de um app Express
const app = express();

// configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importação das rotas
const estudanteRotas = require('./routes/Estudante');
const docenteRotas = require('./routes/Docente');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Esta é a raiz do servidor.')
})

// utilizar as rotas
app.use('/estudante', estudanteRotas);
app.use('/docente', docenteRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));
