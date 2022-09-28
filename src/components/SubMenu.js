// Hopefully this is pretty clear with what you've seen so far, but we're just using the Link component to make out navigation items

import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ handleClose }) => {
  return (
    <ul className='sub-menu'>
      <li onClick={handleClose} className='menu-item'>
        <Link to='/project-1'>project 1</Link>
      </li>
      <li onClick={handleClose} className='menu-item'>
        <Link to='/project-2'>project 2</Link>
      </li>
      <li onClick={handleClose} className='menu-item'>
        <Link to='/project-3'>project 3</Link>
      </li>
    </ul>
  );
};

export default SubMenu;
