import { Pool } from 'pg';
import dotenv from 'dotenv';
import debug from 'debug';

const log = debug('dev');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'test'
    ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
});

pool.on('connect', () => log('connected to the db'));

pool.on('remove', () => log('connection terminated'));

export default pool;
