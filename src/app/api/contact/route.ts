import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Alla fält är obligatoriska." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Kod & Design" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Nytt meddelande från ${name} via kodochdesign.se`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #a855f7;">Nytt kontaktformulär</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Meddelande:</strong></p>
        <p style="white-space: pre-line; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
