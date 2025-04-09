import Sidebar from "../components/Sidebar";

const Contact = () => {
  return (

    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <section className="flex-1 p-10 space-y-12">
          <h2 className="text-xl font-bold mb-6">Contact Me</h2>
          <form className="space-y-4 max-w-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700"
            >
              Send Message
            </button>
          </form>
      </section>
    </div>

  );
};

export default Contact;
