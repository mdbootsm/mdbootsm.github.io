import React, { useState } from "react";

// This is how we make our navigation work. A Link component is basically an <a> tag.
// This is a named export, not a default export, so you need to import it in curly braces
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

// I try to use different scss files for each component, on top of the common file that encompasses everything.
import "../styles/header.scss";

const Header = () => {
  /* This is what everyone loves about React - state. Below I'm defining a state called subMenu with the data 'false', so it's a boolean variable. What happens is everytime that changes, the entire component re-renders, making it easy for dynamic content. The second item in that array, 'showSubMenu' is essentially a function we call to change the state of subMenu. */
  const [subMenu, showSubMenu] = useState(false);

  /* These next two items are functions within my component I call to change state. When the user hovers over 'projects', the sub menu appears, when they hover away of click on a menu item, the sub menu disappears */
  const handleHover = (event) => {
    showSubMenu(true);
  };

  const handleClose = () => {
    showSubMenu(false);
  };

  /* Here is our much bigger return statement than what you've seen previously. class is a reserved word in JavaScript, so to pass css classes, we use className in react. Otherwise it's a lot of similar words to HTML, except these new components we've made, as well as some occasional actual JavaScript in curly braces */
  return (
    <div className='header'>
      <div className='header-left'>
        {/* Link is again just like an a tag. */}
        <Link to='/' className='logo button'>
          sm-a
        </Link>
      </div>
      <div className='header-right'>
        {/* In the div below, we're calling the above functions when the mouse enters or leaves the element - we need to add some more event listeners for mobile for touch instead of hover*/}
        <div
          className='sub-menu-wrapper'
          onMouseOver={handleHover}
          onMouseLeave={handleClose}
        >
          <div className='sub-menu-button' role='button'>
            projects
          </div>
          {/* A bit of JavaScript below which is hardly noticeable. subMenu is boolean, so this is saying 'if subMenu is true, render the SubMenu component', which I separated out. We pass the handleClose function as what's referred to as a 'prop' - short for property, because we call that function when a user clicks on a sub menu item to close the sub menu. */}
          {subMenu && <SubMenu handleClose={handleClose} />}
        </div>
        <div className='menu-contact'>
          <Link to='/contact' className='button'>
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
