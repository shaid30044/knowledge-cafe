import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="exo-2 md:w-1/3">
      <h1 className="text-xl lg:text-2xl font-bold text-center color-3 border-2 border-[#6047EC] bg-[#6047EC1A] rounded-lg px-2 py-5">
        Spent time on read: {readingTime} min
      </h1>
      <div className="exo-2 rounded-lg bg-[#1111110D] p-6 mt-6 mb-10 md:mb-0">
        <h3 className="text-xl lg:text-2xl font-bold color-1">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
