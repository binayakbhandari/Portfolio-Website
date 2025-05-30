import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Hello! I’m <span className="text-yellow-600">Binayak Bhandari</span></h1>
        <h2 className="text-2xl font-semibold text-gray-700">Frontend Developer</h2>

        <div className="flex items-center gap-2 mt-2">
          <FaMapMarkerAlt className="text-gray-500" />
          <span className="bg-gray-200 text-sm px-3 py-1 rounded-full font-medium">Nepal</span>
        </div>

        <p className="mt-4 text-gray-600 max-w-xl">
          Self-taught frontend developer with a passion for clean UI and performance.
          I love building responsive, user-focused web apps using React and Tailwind CSS.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-yellow-600 text-white px-5 py-2 rounded-md font-medium hover:bg-yellow-700">Download CV</button>
          <button className="border border-gray-300 px-5 py-2 rounded-md font-medium hover:bg-gray-100">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
