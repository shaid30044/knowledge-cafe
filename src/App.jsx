import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header />
      <div className="md:flex gap-6">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
