import { Link } from "react-router-dom";
const Navbar = () => {
  const options = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT us</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop">Our Shop</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black fixed z-10 bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#15151580] rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <Link to="/" className="uppercase lg:text-xl font font-black">
          BISTRO BOSS
          <br />
          <span className="text-sm font font-bold">Restaurant</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{options}</ul>
      </div>
    </div>
  );
};

export default Navbar;
