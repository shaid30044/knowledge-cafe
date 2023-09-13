import "./MyCss.css";

const Header = () => {
  return (
    <div className="navbar border-b-2 border-[#11111126] px-0 py-5 mb-8">
      <div className="flex-1">
        <button>
          <a className="exo-2 text-4xl font-bold color-1">Knowledge Cafe</a>
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="./src/assets/images/profile.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
