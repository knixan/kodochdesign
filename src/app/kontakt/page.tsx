"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Rensa tidigare felmeddelanden

    // Klientside-validering
    if (!formData.name.trim()) {
      setError("Vänligen fyll i ditt namn.");
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setError(
        "Vänligen fyll i antingen din e-postadress eller ditt telefonnummer."
      );
      return;
    }

    setFormStatus("Skickar...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus(
          result.message ||
            "Tack för ditt meddelande! Jag återkommer så snart jag kan."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(
          result.message || "Något gick fel. Vänligen försök igen."
        );
      }
    } catch (error) {
      console.error("Fel vid skickande av formulär:", error);
      // Hantera felet på ett säkert sätt för TypeScript
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ett okänt fel uppstod.");
      }
      setFormStatus("Något gick fel. Vänligen försök igen.");
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            Kontakta mig
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Har du en fråga, en idé eller vill du bara säga hej? Fyll i
            formuläret så hör jag av mig!
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            {error && (
              <div className="bg-red-900 text-red-300 p-4 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <div className="mb-6 text-left">
              <label
                htmlFor="name"
                className="block text-gray-400 font-semibold mb-2"
              >
                Namn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="email"
                className="block text-gray-400 font-semibold mb-2"
              >
                E-postadress
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="phone"
                className="block text-gray-400 font-semibold mb-2"
              >
                Telefonnummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="message"
                className="block text-gray-400 font-semibold mb-2"
              >
                Ditt meddelande
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white"
            >
              Skicka meddelande
            </button>
          </form>

          {formStatus && (
            <p
              className={`mt-6 text-center font-medium ${
                formStatus.includes("Tack") ? "text-green-400" : "text-red-400"
              }`}
            >
              {formStatus}
            </p>
          )}

          <div className="mt-12 text-center">
            <Link href="/" className="text-blue-400 hover:underline">
              Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
