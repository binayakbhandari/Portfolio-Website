import ProjectCard from "./ProjectCard";

const SelectedWork = () => {
  const projects = [
    {
      title: "Modern E-commerce Platform",
      image: "/project1.png", // replace with your image paths
      year: "2024 - 2025",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      image: "/project2.png",
      year: "2023 - 2024",
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Selected Work</h2>
        <a href="#" className="text-yellow-600 text-sm hover:underline">View All →</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            year={project.year}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
