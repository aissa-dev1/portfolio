"use server";

import nodemailer from "nodemailer";

const nodemailerTransporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SEND_MAIL_EMAIL,
    pass: process.env.NEXT_PUBLIC_SEND_MAIL_PASS,
  },
});

export async function sendMail({
  name,
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  name?: string;
  email: string;
  sendTo?: string;
  subject?: string;
  text: string;
  html?: string;
}) {
  const info = await nodemailerTransporter.sendMail({
    from: email,
    to: sendTo,
    subject: subject,
    text: text,
    html: html ?? "",
    replyTo: name ? `"${name}" <${email}>` : email,
  });
  return info;
}
