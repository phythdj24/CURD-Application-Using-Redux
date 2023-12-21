import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";
import { MdPersonSearch } from "react-icons/md";


const Navbar = () => {
  const [searchData, setSearchData] = useState("")
  const dispatch = useDispatch()
  

  const allusers = useSelector((state) => state.app.users) || [];

  useEffect(()=>{
    dispatch(searchUser(searchData));
  },[searchData])
 
  return (
    <nav>
      <div className="navbar-container">
          <Link to=''>
        <div className="logo"> 
        <img src="https://redux.js.org/img/redux.svg" alt="Logo"
        className="spin-animation" />
        </div>
        </Link>


        <form  className="search-form">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e)=> setSearchData(e.target.value)}
          />
          <button className="btn" type="submit"> <MdPersonSearch /> </button>
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
