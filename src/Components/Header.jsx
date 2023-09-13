const Header = () => {
  return (
    <div className="navbar border-b-2 border-[#11111126] px-0 py-5 mb-8">
      <div className="flex-1">
        <button>
          <a className="exo-2 btn btn-ghost hover:bg-white normal-case text-2xl lg:text-4xl font-bold color-1 px-0">
            Knowledge Cafe
          </a>
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="./src/assets/images/profile.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
