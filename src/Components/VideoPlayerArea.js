import React, { useRef } from 'react';
import '../Css/VideoPlayerArea.css';

function VideoPlayerArea() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="video-player-container">
      <video ref={videoRef} className="video-player" controls>
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
        {/* <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button> */}
      </div>
    </div>
  );
}

export default VideoPlayerArea;
