import React, {useState} from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import VideoPlayerArea from "./Components/VideoPlayerArea";
import AddCaptionButton from "./Components/AddCaptionButton";
import CaptionInput from "./Components/CaptionInput";
import TimeInput from "./Components/TimeInput";
import VideoUploadLink from "./Components/VideoUploadLink";



export default function App() {
   const [videoUrl, setVideoUrl] = useState('');
   const [captions, setCaptions] = useState([]);

  const handleVideoUpload = (url) => {
    setVideoUrl(url);
  };

  const handleCaptionSubmit = (caption) => {
    setCaptions([...captions, { text: caption, startTime: '', endTime: '' }]);
  };

  const handleAddCaption = (startTime, endTime) => {
    const captionText = ''; 
    handleCaptionSubmit(captionText);
  };
  

  return (
    <>
      <Navbar />
      <div className="content container-main">
        <VideoPlayerArea onUpload={handleVideoUpload}/>
        <VideoUploadLink videoUrl={videoUrl}/>
        <CaptionInput onCaptionSubmit={handleCaptionSubmit}/>
        <TimeInput onAddCaption={handleAddCaption} />
        <AddCaptionButton />
      </div>
    </>
  );
}


