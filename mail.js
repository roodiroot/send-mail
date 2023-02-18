import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const { EMAIL_HOST, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, EMAIL_PORT, EMAIL_SEND } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false,
  auth: {
    user: EMAIL_HOST_USER,
    pass: EMAIL_HOST_PASSWORD,
  },
});

export const Mail = async (message) => {
  const info = await transporter.sendMail({
    from: EMAIL_HOST_USER,
    to: EMAIL_SEND,
    subject: 'ЗАКАЗ',
    text: message,
    html: `<b>${message}</b>`,
  });
  return info.response;
};
