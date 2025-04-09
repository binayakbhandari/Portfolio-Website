import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const About = () => {
    return (

    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <section className="flex-1 p-10 space-y-12">

        <h2 className="text-xl font-bold mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/profile.png" // Replace with your image
            alt="About"
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
          <p className="text-gray-700 leading-relaxed text-justify">
            I’m Binayak, a passionate frontend developer from Nepal. I specialize in building responsive web interfaces using modern technologies like ReactJS and Tailwind CSS. I love turning ideas into real, functional web experiences with a strong focus on performance, aesthetics, and usability.
          </p>
        </div>

      <Services />
      </section>
    </div>
  );
};
  
  export default About;
  