import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="py-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-lg text-center">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            Kontakta oss
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Har du en fråga eller vill du diskutera ditt nästa projekt? Fyll i
            formuläret nedan så hör vi av oss så snart som möjligt!
          </p>
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Ditt namn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ditt namn"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Din e-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Din e-postadress"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Ditt meddelande
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Ditt meddelande"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white"
            >
              Skicka meddelande
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
