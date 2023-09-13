import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div className="exo-2">
      <img className="rounded-lg w-full" src={cover} alt="" />
      <div className="flex justify-between items-center pt-5 lg:pt-8 pb-3 lg:pb-4">
        <div className="flex items-center gap-2 lg:gap-4">
          <img className="w-10 lg:w-14 h-10 lg:h-14" src={author_img} alt="" />
          <div>
            <h3 className="text-xl lg:text-2xl font-bold color-1">{author}</h3>
            <p className="text-sm lg:text-base font-semibold color-2">
              {posted_date}{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <p className="text-lg lg:text-xl font-medium color-2">
            {reading_time} min read
          </p>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="btn btn-ghost hover:bg-white color-2 px-0"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold color-1 lg:leading-[50px]">
        {title}
      </h1>
      <p className="flex text-lg lg:text-xl font-medium color-2 gap-4 pt-4 pb-2">
        {hashtags.map((hashtags, idx) => (
          <span key={idx}>
            <a href="">#{hashtags}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="btn btn-ghost hover:bg-white normal-case text-lg lg:text-xl font-semibold color-3 underline pl-0 mb-10"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
