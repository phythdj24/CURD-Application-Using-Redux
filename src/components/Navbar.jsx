import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allusers = useSelector((state) => state.app.users) || [];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Search submitted:", searchQuery);
  };

  return (
    <nav>
      <div className="navbar-container">
          <Link to=''>
        <div className="logo"> 
        <img src="https://redux.js.org/img/redux.svg" alt="Logo"
        className="spin-animation" />
        </div>
        </Link>


        <form onSubmit={handleSearchSubmit} className="search-form">
          {/* <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button> */}
        </form>
        <div className="Link">
          <Link className="link1" to="/">
            Create Post
          </Link>
          <Link className="link2" to="/read">
            All Post ({allusers.length || 0})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
