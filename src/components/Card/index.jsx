import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, image, name, handleClick, isHidden }) => {
  return(
    <div className={`card-wrapper ${isHidden && 'hidden'}`} onClick={() => handleClick(id)}>
      {
        isHidden
          ? <FontAwesomeIcon icon={faQuestion} className='question-mark-card' />
          : <img src={image} alt={name} id={id} />
      }
    </div>
  );
};

export default Card;
