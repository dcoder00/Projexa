import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({to, subject, body}) => {
    const response = await transporter.sendMail({
        from: process.env.SENDER_EMAIL, // sender address
        to: "alice@example.com, bob@example.com", // list of recipients
        subject: "Hello", // subject line
        html: "<b>Hello world?</b>", // HTML body
    });
    return response;
}

export default sendEmail;