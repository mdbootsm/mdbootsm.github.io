// Because you have a super simple landing page, this is a super simple component - we're just importing the Header and rendering that on this page.

import React from "react";

//Note that when you import more JavaScript, you don't need to use the file extension
import Header from "./Header";

// This is what's called a functional component. There are also classes, which was more of the first generation of React - most people try to use functions nowadays almost exclusively. This is newer syntax for making a function, the other way is like:
// function myFunction (parameters) {
//      some good code    
// }

const Root = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Root;
