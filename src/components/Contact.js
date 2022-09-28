import React from "react";
import Header from "./Header";

import "../styles/contact.scss";

/* This is not a fancy way to do the Google Map, we can customize it better if I get an API key and do it that way, but this is just to get it here for now */
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Header />
      <div className='email'>info@sm-a.ca</div>
      <div className='phone'>XXX-XXX-XXXX</div>
      <iframe
        className='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2104715569244!2d-79.42286934927478!3d43.66459235961011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b348b9fc8fff1%3A0x70a99ed8ba8aaf44!2sChristie%20Pits%20Park!5e0!3m2!1sen!2sca!4v1664326789298!5m2!1sen!2sca'
        width='400'
        height='300'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Contact;
