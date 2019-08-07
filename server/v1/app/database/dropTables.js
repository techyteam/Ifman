import Pool from './db';

const queryText = 'DROP TABLE IF EXISTS users, courses, dues, userCourses CASCADE;';

Pool.query(queryText);
