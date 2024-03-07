import './App.css';
import React, { useState } from 'react';
import AudioFile1 from './AudioFiles/viyn-cotton-candy.mp3';
import AudioFile2 from './AudioFiles/audio2.mp3';
import AudioFile3 from './AudioFiles/cookies.mp3';
import AudioFile4 from './AudioFiles/breeze-soothing.mp3';
import AudioPlayer from './Components/AudioPlayer';
import Card from './Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedAudios, setSelectedAudios] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handleCardClick = (audioFile) => {
    if (!selectedAudios.includes(audioFile)) {
      setSelectedAudios([...selectedAudios, audioFile]);
    }
  };

  const handleRemoveAudio = (audioFile) => {
    setSelectedAudios(selectedAudios.filter(file => file !== audioFile));
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handleVolumeUp = () => {
    handleVolumeChange(Math.min(volume + 0.1, 1));
  };

  const handleVolumeDown = () => {
    handleVolumeChange(Math.max(volume - 0.1, 0));
  };

  return (
    <>
      <div className='app-container'>
        <h1>AUDIO PLAYER</h1>
        <div className='card-div' style={{ display: "flex", flexDirection: "row" }}>
          <Card name="Cotton-Candy" audioFile={AudioFile1} onClick={handleCardClick} image="https://wallpapercave.com/wp/wp11278050.jpg" />
          <Card name="Jazz" audioFile={AudioFile2} onClick={handleCardClick} image="https://img.freepik.com/free-vector/abstract-music-soundwave-banner-design_1048-16745.jpg" />
          <Card name="Cookies" audioFile={AudioFile3} onClick={handleCardClick} image="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg" />
          <Card name="Breeze" audioFile={AudioFile4} onClick={handleCardClick} image="https://c4.wallpaperflare.com/wallpaper/303/241/221/song-music-note-bass-wallpaper-preview.jpg" />

        </div>
        <div className="audio-players">
          <div className='controls'>
            <button onClick={handleVolumeDown}>
              <FontAwesomeIcon icon={faVolumeDown} />
            </button>
            <input type="range"
              id='volume'
              name='volume'
              min={0}
              max={1}
              step='0.05'
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))} />
            <button onClick={handleVolumeUp}>
              <FontAwesomeIcon icon={faVolumeUp} />
            </button>
            <p> Volume: {Math.round(volume * 100)}%</p>
          </div>
          <div className='play-pause-btn'>
            <button onClick={handlePlayPause}>
              {isPlaying ? 'Pause All' : 'Play All'}
            </button>
          </div>
          {selectedAudios.map((audio, index) => (
            <div key={index} className="audio-player-container">
              <AudioPlayer audioFile={audio} isPlaying={isPlaying} volume={volume} />
              <button onClick={() => handleRemoveAudio(audio)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
