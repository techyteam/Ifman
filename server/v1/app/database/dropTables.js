import Pool from './db';

const queryText = 'DROP TABLE IF EXISTS users, courses, dues CASCADE;';

Pool.query(queryText);
