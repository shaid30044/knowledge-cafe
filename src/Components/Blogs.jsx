import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();

      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Blogs: {blogs.length}</h1>
      <Blog />
    </div>
  );
};

export default Blogs;
