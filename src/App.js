import React, {useState} from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import VideoPlayerArea from "./Components/VideoPlayerArea";
import AddCaptionButton from "./Components/AddCaptionButton";
import CaptionInput from "./Components/CaptionInput";
import TimeInput from "./Components/TimeInput";
import VideoUploadLink from "./Components/VideoUploadLink";
import CaptionTable from './Components/CaptionTable';



export default function App() {
   const [videoUrl, setVideoUrl] = useState('');
   const [captions, setCaptions] = useState([]);
   const [captionText, setCaptionText] = useState('');

  const handleVideoUpload = (url) => {
    setVideoUrl(url);
  };

  const handleCaptionSubmit = (text) => {
    setCaptionText(text);
  };

  const handleAddCaption = (startTime, endTime) => {
    const newCaption = { text: captionText, startTime, endTime };
    setCaptions([...captions, newCaption]);
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
        <CaptionTable captions={captions} />
      </div>
    </>
  );
}


