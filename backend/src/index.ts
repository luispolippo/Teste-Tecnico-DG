import server from './server';
import 'dotenv/config';

const { PORT } = process.env;

server.startServer(PORT);
