import Sidebar from "../components/Sidebar";
import BlogCard from "./BlogCard";

const Blog = () => {
  const posts = [
    {
      title: "How I Built My Portfolio Website with React",
      date: "March 2025",
      summary: "A quick walkthrough of how I built my personal site using Vite, React, and Tailwind.",
    },
    {
      title: "Why Tailwind CSS Changed My Development Game",
      date: "February 2025",
      summary: "Tailwind's utility-first approach helped me speed up my design workflow significantly.",
    },
    {
      title: "How I Built My Portfolio Website with React",
      date: "March 2025",
      summary: "A quick walkthrough of how I built my personal site using Vite, React, and Tailwind.",
    },
    {
      title: "Why Tailwind CSS Changed My Development Game",
      date: "February 2025",
      summary: "Tailwind's utility-first approach helped me speed up my design workflow significantly.",
    },
    
  ];

  return (

<div className="flex bg-gray-50 min-h-screen">
<Sidebar />
<section className="flex-1 p-10 space-y-12">
<h2 className="text-xl font-bold mb-6">Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            date={post.date}
            summary={post.summary}
          />
        ))}
      </div>
</section>
</div>
  );
}

export default Blog;
