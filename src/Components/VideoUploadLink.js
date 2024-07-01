import React, { useState } from 'react';
import '../Css/VideoUploadLink.css';

function VideoUploadLink ({ onUpload }) {
  const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = () => {
    if (onUpload) {
      onUpload(videoUrl);
    }
  };

  return (
    <div className="video-upload-container">
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="video-url-input"
      />
      <button onClick={handleUpload} className="upload-button">
        Upload Video
      </button>
    </div>
  );
}

export default VideoUploadLink;
