// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validering för att säkerställa att nödvändig data finns
    if (!name || !message || (!email && !phone)) {
      return NextResponse.json(
        {
          message:
            "Vänligen fyll i ditt namn, meddelande och antingen e-post eller telefonnummer.",
        },
        { status: 400 }
      );
    }

    // Skapa Nodemailer transporter
    // Använder miljövariabler för säkrare hantering av inloggningsuppgifter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // Viktigt: Konvertera port till ett nummer
      secure: process.env.SMTP_SECURE === "true", // Använder secure-inställning från miljövariabler
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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
        <p><strong>E-post:</strong> ${email || "Inte angiven"}</p>
        <p><strong>Telefon:</strong> ${phone || "Inte angiven"}</p>
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
      { message: "Ett internt fel uppstod vid skickande av meddelandet." },
      { status: 500 }
    );
  }
}
