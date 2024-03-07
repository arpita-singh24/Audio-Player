// *****************correct code: playing when click on card**************************//

// import React, { useRef, useState } from 'react';

// const Card = ({ name, audioFile }) => {
//     const audioRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const handleCardClick = () => {
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div className='card' onClick={handleCardClick}>
//             <img src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg" alt="..." />
//             <audio ref={audioRef} style={{ display: 'none' }}>
//                 <source src={audioFile} type="audio/mpeg" />
//                 Your browser does not support the audio element.
//             </audio>
//             <p>{name}</p>
//         </div>
//     );
// };

// export default Card;






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
