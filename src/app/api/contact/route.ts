// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validering
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        {
          message:
            "Vänligen fyll i ditt namn och antingen e-post eller telefonnummer.",
        },
        { status: 400 }
      );
    }

    // Uppdaterad konfiguration för Live/Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // Använd Outlooks SMTP-server
      port: 587,
      secure: false, // Port 587 använder STARTTLS, inte SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3", // Kan behövas för äldre system, men ofta inte
      },
    });

    // Skapa e-postmeddelandets innehåll
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "Nytt meddelande från ditt kontaktformulär",
      html: `
        <h2>Kontaktformulär - Nytt meddelande</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email || "Inte angivet"}</p>
        <p><strong>Telefon:</strong> ${phone || "Inte angivet"}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message}</p>
      `,
    };

    // Skicka e-postmeddelandet
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Meddelandet skickades framgångsrikt!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Ett internt fel uppstod." },
      { status: 500 }
    );
  }
}
