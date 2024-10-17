const jsonServer = require('json-server');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Define o caminho absoluto do arquivo

server.use(jsonServer.defaults());
server.use('/', router); // Define o caminho base para o JSON Server

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = 3001; // Usa a porta do ambiente ou 3000
  server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});