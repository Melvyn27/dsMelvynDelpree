import express from 'express';
import { createServer } from 'http';
import api from './api';

const app = express();
app.use('/api', api);

const server = createServer(app) ; server.listen('8080', () => {
    console.log('Listening on port 8080');
});
