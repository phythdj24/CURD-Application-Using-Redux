import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log('Search submitted:', searchQuery);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">Your Logo</div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul className="nav-links">
          <li><Link to="/">Create Post</Link></li>
          <li><Link to="/read">All Post</Link></li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
