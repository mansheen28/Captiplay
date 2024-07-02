import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import VideoPlayerArea from './Components/VideoPlayerArea';
import AddCaptionButton from './Components/AddCaptionButton';
import CaptionInput from './Components/CaptionInput';
import TimeInput from './Components/TimeInput';
import VideoUploadLink from './Components/VideoUploadLink';
import CaptionTable from './Components/CaptionTable';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [captionText, setCaptionText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleVideoUpload = (url) => {
    setVideoUrl(url);
  };

  const handleCaptionChange = (text) => {
    setCaptionText(text);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const parseTime = (time) => {
    const parts = time.split(':');
    if (parts.length === 2) {
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      return minutes * 60 + seconds;
    }
    return parseInt(time, 10); // Fallback if the format is not correct
  };

  const handleAddCaption = () => {
    const newCaption = {
      text: captionText,
      startTime: parseTime(startTime), // Ensure startTime is parsed correctly
      endTime: parseTime(endTime), // Ensure endTime is parsed correctly
    };
    setCaptions([...captions, newCaption]);
    setCaptionText(''); // Clear caption input after adding
    setStartTime(''); // Clear startTime input after adding
    setEndTime(''); // Clear endTime input after adding
  };

  return (
    <>
      <Navbar />
      <div className="content container-main">
        <VideoPlayerArea videoUrl={videoUrl} captions={captions} />
        <VideoUploadLink onUpload={handleVideoUpload} />
        <CaptionInput onChange={handleCaptionChange} value={captionText} />
        <TimeInput 
          onStartTimeChange={handleStartTimeChange}
          onEndTimeChange={handleEndTimeChange}
          startTime={startTime}
          endTime={endTime}
        />
        <AddCaptionButton onClick={handleAddCaption} />
        <CaptionTable captions={captions} />
      </div>
    </>
  );
}
