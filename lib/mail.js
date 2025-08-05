import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_APP_MAIL, 
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const mail = async ({ mailOptions }) => {
  try {
    await transporter.sendMail({
      ...mailOptions,
      to: process.env.GOOGLE_APP_MAIL, 
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
