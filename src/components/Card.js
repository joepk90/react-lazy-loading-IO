import React from 'react';

const Card = ({title, text, image}) => {
    return (
      <div className="card">
        <img src={image}/>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  };


  export default Card;