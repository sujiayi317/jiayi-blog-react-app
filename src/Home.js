import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "jenny", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "jenny", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "bernard",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "jenny")}
        title="Jenny's blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
