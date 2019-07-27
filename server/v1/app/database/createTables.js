import Pool from './db';

const queryText = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(130) UNIQUE NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    type VARCHAR(7) DEFAULT 'member',
    isAdmin BOOLEAN DEFAULT 'false'
  );
  CREATE TABLE IF NOT EXISTS courses(
    Id SERIAL PRIMARY KEY,
    courseTitle VARCHAR(150) NOT NULL,
    memberFees NUMERIC(200,2) NOT NULL,
    nonMemberFee NUMERIC(200,2) NOT NULL,
    feesStatus VARCHAR(7) DEFAULT 'paid',
    duration INTEGER NOT NULL,
    venue VARCHAR(100) NOT NULL,
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE, 
    registeredOn TIMESTAMP NOT NULL DEFAULT now(),
    date TIMESTAMP NOT NULL
  );
  CREATE TABLE IF NOT EXISTS dues(
    Id SERIAL PRIMARY KEY,
    type VARCHAR(10) DEFAULT 'anual',
    status VARCHAR(10) DEFAULT 'unpaid',
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE, 
    paidOn TIMESTAMP NOT NULL DEFAULT now()
  ); 
`;

Pool.query(queryText);
