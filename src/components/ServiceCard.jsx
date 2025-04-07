const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition duration-300">
        <div className="text-3xl mb-4 text-yellow-600">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  