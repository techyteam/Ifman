import moment from 'moment';
import Pool from './db';
import Auth from '../auth/auth';

const queryText = `
  INSERT INTO users (firstName, lastName, email, password, type, isAdmin) 
  VALUES ('Aisha', 'Abdulkareem', 'aishabd@gmail.com', '${Auth.hashPassword('password')}', 'admin', true),
         ('Dasola', 'Akolo', 'dassyakolo@gmail.com', '${Auth.hashPassword('password')}', 'member', false),
         ('Jasmine', 'Abdul', 'jas.abdul@gmail.com', '${Auth.hashPassword('password')}', 'member', false),
         ('Halima', 'Ayo', 'halima@gmail.com', '${Auth.hashPassword('password')}', 'member', false),
         ('Jane', 'Doe', 'janedoe@gmail.com', '${Auth.hashPassword('password')}', 'member', false);

 INSERT INTO courses (courseTitle, memberFees, nonMemberFee, feesStatus, duration, venue, userId, registeredOn, date) 
 VALUES ('Facility Management Operations Training', 106500.00, 115500.00, 'paid', 3, 'IFMA Secretariat', 2, '${moment(new Date())}', '${moment(new Date())}'),
        ('Facility Management Operations Training', 106500.00, 115500.00, 'paid', 3, 'IFMA Secretariat', 1, '${moment(new Date())}', '${moment(new Date())}'),
        ('Facility Management Operations Training', 106500.00, 115500.00, 'paid', 3, 'IFMA Secretariat', 3, '${moment(new Date())}', '${moment(new Date())}');
`;

Pool.query(queryText);
