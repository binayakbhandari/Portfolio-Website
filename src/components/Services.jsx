import ServiceCard from "./ServiceCard";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Build responsive websites and apps using React and Tailwind CSS.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Design clean, user-focused interfaces that improve usability.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Optimization",
      description: "Ensure websites work perfectly on all screen sizes and devices.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Build responsive websites and apps using React and Tailwind CSS.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Design clean, user-focused interfaces that improve usability.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Optimization",
      description: "Ensure websites work perfectly on all screen sizes and devices.",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
