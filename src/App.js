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
  const [isPlaying, setIsPlaying] = useState(false);

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

  const validateTimeFormat = (time) => {
    const regex = /^\d{2}:\d{2}$/;
    return regex.test(time);
  };

  const parseTime = (time) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const handleAddCaption = () => {
    if (!isPlaying) {
      if (!validateTimeFormat(startTime) || !validateTimeFormat(endTime)) {
        alert("Time must be in the format MM:SS");
        return;
      }

      const newCaption = {
        text: captionText,
        startTime,
        endTime,
        startTimeSeconds: parseTime(startTime),
        endTimeSeconds: parseTime(endTime),
      };
      setCaptions([...captions, newCaption]);
      setCaptionText(''); // Clear caption input after adding
      setStartTime(''); // Clear startTime input after adding
      setEndTime(''); // Clear endTime input after adding
    } else {
      alert("Cannot add captions while the video is playing. Please pause the video first.");
    }
  };

  const handleDeleteCaption = (index) => {
    const newCaptions = captions.filter((_, i) => i !== index);
    setCaptions(newCaptions);
  };

  const handlePlaybackChange = (playing) => {
    setIsPlaying(playing);
  };

  return (
    <>
      <Navbar />
      <div className="content container-main">
        <VideoPlayerArea videoUrl={videoUrl} captions={captions} onPlaybackChange={handlePlaybackChange} />
        <VideoUploadLink onUpload={handleVideoUpload} />
        <CaptionInput onChange={handleCaptionChange} value={captionText} />
        <TimeInput 
          onStartTimeChange={handleStartTimeChange}
          onEndTimeChange={handleEndTimeChange}
          startTime={startTime}
          endTime={endTime}
        />
        <AddCaptionButton onClick={handleAddCaption} />
        <CaptionTable captions={captions} onDelete={handleDeleteCaption} />
      </div>
    </>
  );
}
