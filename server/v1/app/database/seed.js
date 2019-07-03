import moment from 'moment';
import Pool from './db';
//import Auth from '../utils/authenticate';

const queryText = `
  INSERT INTO users (id, regNumber, firstname, lastname, email, password, type, isAdmin) 
  VALUES (1, 1758964523, 'Aisha', 'Abdulkareem', 'aishabd@gmail.com', '${Auth.hashPassword('password')}', 'admin', true),
         (2, 7596841530, 'Dasola', 'Akolo', 'dassyakolo@gmail.com', '${Auth.hashPassword('password')}', 'member', false);
         (3, 5823642528, 'Jasmine', 'Abdul', 'jas.abdul@gmail.com', '${Auth.hashPassword('password')}', 'student', false);
         (4, 5428745632, 'Jane', 'Doe', 'janedoe@gmail.com', '${Auth.hashPassword('password')}', 'partner', false);
         
  INSERT INTO courses(id, courseName, resgisteredon, courseID, type) 
  VALUES(1, 'facility management', ${moment(new Date())}', 1758964523,  'member'),
        (2, 'safty' '${moment(new Date())}', 7596841530, 'student'),
        (3, 'facility management', ${moment(new Date())}', 5823642528, 'partner'),
        (4, 'safty', ${moment(new Date())}', 5428745632, 'member');
        
  INSERT INTO payments(id, createdon, type, regNumber, tool, amount, unclearedBal) 
  VALUES(i, '${moment(new Date())}', 'fee', 1758964523, verve, 25000.00, 800000.58),
        (2, '${moment(new Date())}', 'dues', 7596841530, masterCard, 300000.00, 200000.00),                                                                                                                                                           ),
        (3, '${moment(new Date())}', 'fee', 5823642528, remita, 50000.00, 0.00, 50000.00),
        (4, '${moment(new Date())}', 'dues', 8745521633, 2, 35000.00, 200000.00, 165000.00),
        (5, '${moment(new Date())}', 'fee', 5428745632, 2, 1500.00, 40000.35, 38500.35);
`;

Pool.query(queryText);