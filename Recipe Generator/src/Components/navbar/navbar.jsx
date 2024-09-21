import React, { useState } from 'react';
import "./navbar.css"; 
import { AudioRecorder } from 'react-audio-voice-recorder';  // Import the recorder
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [audioBlob, setAudioBlob] = useState(null); // State to store the recorded audio
  const apiKey = "https://localhost:5000"; // Replace with your actual API key

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submission (sending data to backend)
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery || audioBlob) { // Only send if there's search input or audio
      try {
        const formData = new FormData();
        formData.append('searchQuery', searchQuery); // Add search query to the form data
        if (audioBlob) {
          formData.append('audio', audioBlob, 'audioRecording.webm'); // Add audio blob to form data
        }

        const response = await fetch('https://localhost:5000/search', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`, // Use API key in headers for authentication
          },
          body: formData, // Send search query and audio data
        });

        const data = await response.json();
        console.log('Response from API:', data);
        // You can handle the response from the API here (e.g., update UI with search results)
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    }
  };

  // Function to handle audio recording
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    console.log('Audio URL:', url);
    setAudioBlob(blob); // Store the audio blob
    // Optionally, you can send the audio immediately upon recording
    // handleSearchSubmit(); // If you want to submit the data immediately after recording
  };

  return (
    <div className="nav">
      <img src={getImageUrl("navbar/Licious-Logo.png")} alt="Licious logo" className='logo'/> 
      <form className="searchBar" onSubmit={handleSearchSubmit}>
        <input
          type="search" 
          placeholder='Search your favourite recipes..' 
          className="search-space"
          value={searchQuery} // Bind input value to state
          onChange={handleSearchChange} // Update state when user types
        />
        <button type="submit" className='search-btn'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        
        {/* Microphone icon and recorder */}
        <div className="mic-icon">
          <AudioRecorder 
            onRecordingComplete={addAudioElement} // Function to handle the recorded audio
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true
            }}
            showVisualizer={false}
          />
        </div>
      </form>
      <i className="fa-regular fa-heart likes"></i>
      <div className="home">
        <i className="fa-solid fa-house"></i>
      </div>
    </div>
  );
};
