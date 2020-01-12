import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SERVER_MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const mailOptions = (receiverMail, mailSubject, mailContent) => ({
  from: process.env.SERVER_MAIL, // sender address
  to: `${receiverMail}`, // list of receivers
  subject: `${mailSubject}`, // Subject line
  html: `${mailContent}`, // plain text body
  // attachments: [
  //   {
  //     // file on disk as an attachment
  //     filename: attachment,
  //     path: domain - address / file - name,
  //   },
  // ],
});
