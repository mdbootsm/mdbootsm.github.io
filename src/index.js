/* This is the root file in how react-scripts sets up the file structure. It's a little redundant - in doing almost nothing - with the main component 'App'. It gives you an opportunity to 'wrap' necessary tooling around your project - I was using a Google style library and wrapped some custom overrides and theme colours around everything - but it was making it too complicated and got rid of it.*/

// Import the basics from the react library
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the font I installed
import 'typeface-barlow';

// Import a common styles file that will do basic stuff for the whole site
import './styles/common.scss';

// This is our main component - the entire App
import App from './components/App';

// All react does is render a div called 'root' and then inserts a bunch of stuff in it via JavaScript. That's what's being rendered here. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);