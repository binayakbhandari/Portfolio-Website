const ProjectCard = ({ image, title, year }) => {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{year}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  