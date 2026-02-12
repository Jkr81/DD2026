// index.js
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  console.log(req.url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\nYou are trying to access: ' + req.url);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
