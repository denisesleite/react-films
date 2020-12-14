import React from 'react';

import './style.css';

interface PropsImage{
  title: string;
  url: string;
  children?: any;
  sizeImage: string;
}

export const Image = ({title, url, children, sizeImage}: PropsImage) => {
  return (
    <div className="image" style={{paddingBottom: `${sizeImage}`}}>
      <img src={url} alt={title} />

      {children}
    </div>
  )
}
