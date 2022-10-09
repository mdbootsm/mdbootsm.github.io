import React from "react";

import "../styles/image.scss";

const Image = ({ img, type, caption, description, alt }) => {
  const imageType = type || 'jpg';
  const small = `${img}-small.${imageType}`;
  const medium = `${img}-medium.${imageType}`;
  const large = `${img}-large.${imageType}`;
// console.log(small);

  return (
    <div className='image-section'>
      <div className='image-wrapper'>
        <img 
          src={medium} 
          srcSet={`${small} 640w, ${medium} 1000w, ${large} 2000w`} 
          className='image' 
          alt={alt} 
        />
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
      {description && (
        <div className='description-wrapper-small'>
          <p className='description'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Image;
