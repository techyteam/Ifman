import Pool from './db';

const queryText = 'DROP TABLE IF EXISTS users, courses, payments CASCADE';

Pool.query(queryText);
