import Pool from './db';


const queryText = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    regNumber BIGINT UNIQUE NOT NULL,
    email VARCHAR(130) UNIQUE NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    type VARCHAR(6) DEFAULT 'USER',
    isadmin BOOLEAN DEFAULT NULL
  ); 
  CREATE TABLE IF NOT EXISTS courses(
    id SERIAL PRIMARY KEY,
    courseName VARCHAR(100) NOT NULL,
    registeredon TIMESTAMP NOT NULL,   
    courseID INTEGER REFERENCES users(id),
    type VARCHAR(7) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS payments(
    id SERIAL PRIMARY KEY,
    createdon TIMESTAMP NOT NULL,
    type VARCHAR(6) NOT NULL,
    regNumber BIGINT REFERENCES courses(id) ON DELETE CASCADE,
    tool VARCHAR(20) NOT NULL,
    amount NUMERIC(200, 2) NOT NULL,
    unclearedBal NUMERIC(200, 2) NOT NULL CHECK (amount > -1)
  ); 
`;

Pool.query(queryText);
