import React, { useRef, useEffect } from 'react';
import '../Css/VideoPlayerArea.css';

function VideoPlayerArea({ videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
    }
  }, [videoUrl]);

  return (
    <div className="video-player-container">
      <video ref={videoRef} className="video-player" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
      </div>
    </div>
  );
}

export default VideoPlayerArea;
