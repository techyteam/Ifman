import moment from 'moment';
import Pool from './db';
import Auth from '../auth/auth';

const queryText = `
  INSERT INTO users (firstName, lastName, email, password, registered, isAdmin) 
  VALUES ('Aisha', 'Abdulkareem', 'aishabd@gmail.com', '${Auth.hashPassword('password')}', 'true', true),
         ('Dasola', 'Akolo', 'dassyakolo@gmail.com', '${Auth.hashPassword('password')}', 'true', true),
         ('Jasmine', 'Abdul', 'jas.abdul@gmail.com', '${Auth.hashPassword('password')}', 'false', false),
         ('Halima', 'Ayo', 'halima@gmail.com', '${Auth.hashPassword('password')}', 'true', false),
         ('Jane', 'Doe', 'janedoe@gmail.com', '${Auth.hashPassword('password')}', 'true', false);

 INSERT INTO courses (courseTitle, memberFees, nonMemberFee, startDate, endDate) 
 VALUES ('Facility Management Operations Training', 106500.00, 115500.00, '${moment(new Date())}', '${moment(new Date())}'),
        ('Facility Management Operations Training', 106500.00, 115500.00, '${moment(new Date())}', '${moment(new Date())}'),
        ('Facility Management Operations Training', 106500.00, 115500.00, '${moment(new Date())}', '${moment(new Date())}');

 INSERT INTO userCourses (registeredOn, userId, courseId) 
 VALUES ('${moment(new Date())}', 3, 1),
        ('${moment(new Date())}', 5, 2),
        ('${moment(new Date())}', 4, 3);
       
`;

Pool.query(queryText);
