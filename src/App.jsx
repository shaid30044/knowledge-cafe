import "./App.css";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
