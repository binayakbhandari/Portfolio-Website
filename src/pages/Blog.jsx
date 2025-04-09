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
  ];

  return (
    <section className="mt-12">
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
  );
};

export default Blog;
