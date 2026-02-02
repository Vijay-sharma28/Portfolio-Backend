import nodemailer from "nodemailer";

export const sendMail = async (toEmail, name) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.myEmail,
        pass: process.env.myPass,
      },
    });

    const mailOptions = {
      from: `"Vijay sharma" <${process.env.myEmail}>`,
      to: toEmail,
      subject: "Thank You for Contacting Me",
      text: `Hi ${name},\n\nThank you for reaching out! I will get back to you soon.\n\n- Vijay`,
      html: `<p>Hi <b>${name}</b>,</p><p>Thank you for reaching out! I will get back to you soon.</p><p>- Vijay</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent to:", toEmail);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

