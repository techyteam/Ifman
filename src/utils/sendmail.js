import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'emailPasword',
  },
});

export const mailOptions = (receiverMail, mailSubject, mailContent) => {
  return {
    from: 'ifman@gmail.com', // sender address
    to: `${receiverMail}`, // list of receivers
    subject: `${mailSubject}`, // Subject line
    html: `${mailContent}`, // plain text body
  };
};
