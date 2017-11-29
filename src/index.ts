import * as http from 'http';
import * as express from "express";

import connector from './botConnector';

const app = express();
const server = http.createServer(app);
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/api/messages', connector.listen());

// start the server
server.listen(port, () => {
  console.log('Listening on %s', port);
});
