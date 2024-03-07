
import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';


const formWaveSurferOptions = (ref) => ({
    container: ref,
    waveColor: "gray",
    progressColor: "green",
    cursorColor: 'transparent',
    responsive: true,
    height: 40,
    normalize: true,
    backend: 'WebAudio',
    barWidth: 2,
    barGap: 3,
});

function formatTime(seconds) {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

const AudioPlayer = ({ audioFile, isPlaying, volume }) => {
    const waveformRef = useRef(null);
    const Wavesurfer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioFileName, setAudioFileName] = useState("");

    useEffect(() => {
        const options = formWaveSurferOptions(waveformRef.current);
        Wavesurfer.current = WaveSurfer.create(options);
        Wavesurfer.current.load(audioFile);

        Wavesurfer.current.on('ready', () => {
            setDuration(Wavesurfer.current.getDuration());
            setAudioFileName(audioFile.split('/').pop());
        });

        Wavesurfer.current.on('audioprocess', () => {
            setCurrentTime(Wavesurfer.current.getCurrentTime());
        });

        return () => {
            Wavesurfer.current.un('audioprocess');
            Wavesurfer.current.un('ready');
            Wavesurfer.current.destroy();
        };
    }, [audioFile]);

    useEffect(() => {
        if (isPlaying) {
            Wavesurfer.current.play();
        } else {
            Wavesurfer.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        Wavesurfer.current.setVolume(volume);
    }, [volume]);

    return (
        <div className='player'>
            <div className="audio-player">
                <div id='waveform' ref={waveformRef} className='waveform-container'>
                    <div className='audio-info'>
                        <span>
                            Playing: {audioFileName}<br />
                        </span>
                        <span>
                            Duration: {formatTime(duration)}
                        </span><br />
                        <span>Current Time: {''}
                            {formatTime(currentTime)} <br />
                        </span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
