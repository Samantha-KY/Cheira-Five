import nodemailer from "nodemailer"

export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("Missing SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter;
}

export async function sendBookingEmail({
  to,
  from,
  subject,
  html,
}: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  const transporter = getTransporter();
  await transporter.sendMail({ to, from, subject, html });
}
