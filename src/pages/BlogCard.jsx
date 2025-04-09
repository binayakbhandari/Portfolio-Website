const BlogCard = ({ title, date, summary }) => {
    return (
      <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <p className="text-gray-600 text-sm">{summary}</p>
      </div>
    );
  };
  
  export default BlogCard;
  