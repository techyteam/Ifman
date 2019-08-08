import Pool from './db';
 
const queryText = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(130) UNIQUE NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phoneNumber BIGINT UNIQUE NOT NULL,
    isAdmin BOOLEAN DEFAULT false
  );
  CREATE TABLE IF NOT EXISTS courses(
    id SERIAL PRIMARY KEY,
    courseTitle VARCHAR(150) NOT NULL,
    memberFees NUMERIC(200,2) NOT NULL,
    nonMemberFee NUMERIC(200,2) NOT NULL,
    startDate TIMESTAMP NOT NULL,
    endDate TIMESTAMP NOT NULL
  );
  CREATE TABLE IF NOT EXISTS userCourses(
    registeredOn TIMESTAMP DEFAULT now(),
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    courseId INTEGER REFERENCES courses(id) ON DELETE CASCADE,
    PRIMARY KEY (userId, courseId)
  );
  CREATE TABLE IF NOT EXISTS dues(
    id SERIAL PRIMARY KEY,
    paidOn TIMESTAMP DEFAULT now(),
    type VARCHAR(10) DEFAULT 'annual',
    amount NUMERIC(200, 2) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS userDues(
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    duesId INTEGER REFERENCES dues(id) ON DELETE CASCADE
  );
  CREATE TABLE IF NOT EXISTS events(
    id SERIAL PRIMARY KEY,
    imageUrl VARCHAR(200) NOT NULL,
    title VARCHAR(200) not null  
  );
`;

Pool.query(queryText);
