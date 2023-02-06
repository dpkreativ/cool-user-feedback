// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const body = req.body;

  const mailData = {
    from: 'test@example.com',
    to: 'test@example.com',
    subject: `New feedback from ${body.name}`,
    text: `${body.feedback}`,
    html: `<p>${body.feedback}</p>`,
  };

  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  transport.sendMail(mailData, (error, info) => {
    if (error) console.log(error);
    console.log(`Message sent: ${info.messageId}`);
  });

  res.status(200).json({ body });
}
