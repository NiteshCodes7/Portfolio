import { mail } from "./mail";


export const sendMail = async ({ name, email, subject, message }) => {
    const mailOptions = {
    from: email,
    subject: subject,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  await mail({ mailOptions });
}