const express = require('express'); //invocando o módulo express
const app = express(); //instância de um aplicativo Express
const PORT = 3000;
const fs = require('fs'); // invocando metodo fs para a manipulação de arquivos
const path = require('path'); //invocando metodo path para trabalhar com caminhos
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Função para ler um arquivo JSON com o caminho __dirname/db/
function readJSONFile(filename) {
    const filePath = path.join(__dirname, 'db', filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Função para escrever um objeto JSON em um arquivo dentro do caminho __dirname/db/
function writeJSONFile(filename, data) {
    const filePath = path.join(__dirname, 'db', filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

//!ROTAS PARA CURSOS
//GET - Rota para obter todos os cursos
app.get('/cursos', (req, res) => {
    const cursos = readJSONFile('cursos.json');
    res.json(cursos);
});
//GET - Rota para obter um curso por ID [curso específico]
app.get('/cursos/:id', (req, res) => {
    const cursos = readJSONFile('cursos.json');
    const curso = cursos.find((c) => c.id === parseInt(req.params.id));
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ message: 'Curso não encontrado' });
    }
});

//!ROTAS PARA DISCIPLINAS
// GET - Rota para obter todas as disciplinas
app.get('/disciplinas', (req, res) => {
    const disciplinas = readJSONFile('disciplinas.json');
    res.json(disciplinas);
});
// GET - Rota para obter uma disciplina por ID [disciplina específica]
app.get('/disciplinas/:id', (req, res) => {
    const disciplinas = readJSONFile('disciplinas.json');
    const disciplina = disciplinas.find((c) => c.id === parseInt(req.params.id));
    if (disciplina) {
      res.json(disciplina);
    } else {
      res.status(404).json({ message: 'Disciplina não encontrada' });
    }
});

//!ROTAS PARA GRUPOS_DISCIPLINAS
// GET - Rota para obter todos os grupos disciplinas
app.get('/grupos_disciplinas', (req, res) => {
    const grupos_disciplinas = readJSONFile('grupos_disciplinas.json');
    res.json(grupos_disciplinas);
});
// GET - Rota para obter um grupo disciplina por ID  [grupo disciplina específico]
app.get('/grupos_disciplinas/:id', (req, res) => {
    const grupos_disciplinas = readJSONFile('grupos_disciplinas.json');
    const grupoDisciplina = grupos_disciplinas.find((c) => c.id === parseInt(req.params.id));
    if (grupoDisciplina) {
      res.json(grupoDisciplina);
    } else {
      res.status(404).json({ message: 'Grupo disciplina não encontrado' });
    }
});

//!ROTAS PARA MODALIDADES
// GET - Rota para obter todas as modalidades
app.get('/modalidades', (req, res) => {
    const modalidades = readJSONFile('modalidades.json');
    res.json(modalidades);
});

//!ROTAS PARA NUCLEOS
// GET - Rota para obter todos os nucleos
app.get('/nucleos', (req, res) => {
    const nucleos = readJSONFile('nucleos.json');
    res.json(nucleos);
});
// GET - Rota para obter um nucleo por ID [núcleo específico]
app.get('/nucleos/:id', (req, res) => {
    const nucleos = readJSONFile('nucleos.json');
    const nucleo = nucleos.find((c) => c.id === parseInt(req.params.id));
    if (nucleo) {
      res.json(nucleo);
    } else {
      res.status(404).json({ message: 'Nucleo não encontrada' });
    }
});

//! ROTA PARA TEMATICAS
// GET - Rota para obter todas as tematicas
app.get('/tematicas', (req, res) => {
    const tematicas = readJSONFile('tematicas.json');
    res.json(tematicas);
});

//! ROTA PADRÃO
app.get('/', (req, res) => res.send('Página inicial'));

//Iniciando o app informando passando a porta de escuta
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`); //o app está em funcionamento e pronto para receber solicitações por essa porta
});

