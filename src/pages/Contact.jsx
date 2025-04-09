const Contact = () => {
    return (
      <section className="mt-12 mb-10">
        <h2 className="text-xl font-bold mb-6">Contact</h2>
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
    );
  };
  
  export default Contact;
  