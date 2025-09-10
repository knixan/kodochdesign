// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, message } = await request.json();

//     // Validering för att säkerställa att nödvändig data finns
//     if (!name || !message || (!email && !phone)) {
//       return NextResponse.json(
//         {
//           message:
//             "Vänligen fyll i ditt namn, meddelande och antingen e-post eller telefonnummer.",
//         },
//         { status: 400 }
//       );
//     }

//     // Skapa e-postmeddelandets innehåll
//     const htmlContent = `
//       <h2>Kontaktformulär - Nytt meddelande</h2>
//       <p><strong>Namn:</strong> ${name}</p>
//       <p><strong>E-post:</strong> ${email || "Inte angiven"}</p>
//       <p><strong>Telefon:</strong> ${phone || "Inte angiven"}</p>
//       <p><strong>Meddelande:</strong></p>
//       <p>${message}</p>
//     `;

//     // Skicka e-postmeddelandet med Resend
//     const { data, error } = await resend.emails.send({
//       from: process.env.RESEND_SENDER_EMAIL,
//       to: process.env.RESEND_RECIPIENT_EMAIL,
//       subject: "Nytt meddelande från ditt kontaktformulär",
//       html: htmlContent,
//     });

//     if (error) {
//       console.error("Resend API Error:", error);
//       return NextResponse.json(
//         { message: "Ett fel uppstod vid skickande av meddelandet." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Meddelandet skickades framgångsrikt!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { message: "Ett internt fel uppstod vid skickande av meddelandet." },
//       { status: 500 }
//     );
//   }
// }
