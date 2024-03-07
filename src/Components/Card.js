import React from 'react';

const Card = ({ image, name, audioFile, onClick }) => {
    const handleCardClick = () => {
        onClick(audioFile);
    };

    return (
        <div className='card' onClick={handleCardClick}>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Card;
