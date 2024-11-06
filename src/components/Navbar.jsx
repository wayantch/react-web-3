import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container flex justify-between items-center px-20 py-5 bg-blue-500 text-white">
          <h1 className="text-3xl font-semibold"><Link to="/">Wayan </Link></h1>
          <div className="">
            <ul>
              <li className="text-xl font-semibold">
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
