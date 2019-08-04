import React from 'react';
import './styles.scss';

const Card = ({ id, image, name }) => {
  return(
    <div className='card-wrapper'>
      <img src={image} alt={name} id={id} />
    </div>
  );
}

export default Card;
