import React from 'react';
import { Link } from 'react-router';

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost text-xl"> PIC SEEK </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li> <Link to={'/'}> Home </Link> </li>
            <li> <Link to={'/all-images'}> All Images </Link> </li>
            <li> <Link to={'/generate-image'}> Generate Image </Link> </li>
            <li> <Link to={'/tasks'}> Tasks </Link> </li>
            <li> <Link to={'/login'}> Login </Link> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;