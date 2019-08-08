import moment from 'moment';
import Pool from './db';
import Auth from '../auth/auth';

const queryText = `
 INSERT INTO users (firstName, lastName, email, password, phoneNumber, isAdmin) 
 VALUES ('Aisha', 'Abdulkareem', 'aishabd@gmail.com', '${Auth.hashPassword('password')}', 123456789, true),
         ('Dasola', 'Akolo', 'dassyakolo@gmail.com', '${Auth.hashPassword('password')}', 123456781, true),
         ('Jasmine', 'Abdul', 'jas.abdul@gmail.com', '${Auth.hashPassword('password')}', 123456782, false),
         ('Halima', 'Ayo', 'halima@gmail.com', '${Auth.hashPassword('password')}', 123456783, false),
         ('Jane', 'Doe', 'janedoe@gmail.com', '${Auth.hashPassword('password')}', 123456784, false);

 INSERT INTO courses (courseTitle, memberFees, nonMemberFee, startDate, endDate) 
 VALUES ('Facility Management Operations Training', 106500.00, 115500.00, '${moment(new Date())}', '${moment(new Date())}'),
        ('Facility Management Operations Training', 106500.00, 115500.00, '${moment(new Date())}', '${moment(new Date())}'),
        ('Facility Management Operations Training', 106500.00, 115500.00, '${moment(new Date())}', '${moment(new Date())}');

 INSERT INTO userCourses (registeredOn, userId, courseId) 
 VALUES ('${moment(new Date())}', 5, 1),
        ('${moment(new Date())}', 5, 2),
        ('${moment(new Date())}', 4, 3);
       
`;

Pool.query(queryText);
