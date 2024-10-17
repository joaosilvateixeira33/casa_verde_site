const jsonServer = require('json-server');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use('/plants', router); 

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000
  server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});