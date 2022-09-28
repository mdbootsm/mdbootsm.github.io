import React from "react";

import "../styles/image.scss";

const Image = ({ img, caption, description, alt }) => {
  return (
    <div className='image-wrapper'>
      <img src={img} className='image' alt={alt} />
      {description && (
        <div className='description-wrapper'>
          <p className='description'>{description}</p>
        </div>
      )}
      {caption && (
        <div className='caption-wrapper'>
          <p className='caption'>{caption}</p>
        </div>
      )}
    </div>
  );
};

export default Image;
