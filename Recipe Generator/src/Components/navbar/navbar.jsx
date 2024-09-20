import React,{ useState } from 'react';
import "./navbar.css"; 
import { AudioRecorder } from 'react-audio-voice-recorder';  // Import the recorder
import { getImageUrl } from "../../utils.js";


export const Navbar = () => {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    console.log('Audio URL:', url);
    // You can send this 'blob' to your backend or process it here
  };
  return (
    <div className="nav">
      <img src={getImageUrl("navbar/Licious-Logo.png")} alt="Licious logo" className='logo'/> 
      <div className='searchBar'>
        <input  //Taking input from user
          type="search" 
          placeholder='Search your favourite recipes..' 
          className="search-space"
        />
        <i className="fa-solid fa-magnifying-glass"></i>

        {/* Microphone icon and recorder */}
        <div className="mic-icon">
          {/* Font Awesome mic icon */}
          {/* <i className="fa-solid fa-microphone"></i> */}

          {/* Audio Recorder component */}
          <AudioRecorder 
            onRecordingComplete={addAudioElement} // Function to handle the recorded audio
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true
            }} // Optional: Improve recording quality
            showVisualizer={false} // Optionally hide the visualizer
          />
        </div>
      </div>
      <i className="fa-regular fa-heart likes"></i>
      <div className="home">
        <i className="fa-solid fa-house"></i>
      </div>

    </div>
  );
};
