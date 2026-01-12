// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

// Create transporter using Gmail (App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Gmail address (from Vercel env)
    pass: process.env.EMAIL_PASS,  // App password (from Vercel env)
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]); // important for 405 handling
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender info
      to: process.env.EMAIL_USER,   // receiver email (your Gmail)
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
}



//pifs wmod ojvh ftay