import React, { useRef, useEffect } from 'react';
import '../Css/VideoPlayerArea.css';

function VideoPlayerArea({ videoUrl, captions }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
    }
  }, [videoUrl]);

  useEffect(() => {
    if (videoRef.current && captions.length > 0) {
      let track = videoRef.current.textTracks[0];

      // Clear the previous cues
      if (track) {
        while (track.cues.length > 0) {
          track.removeCue(track.cues[0]);
        }
      } else {
        // Add new text track if not present
        track = videoRef.current.addTextTrack("captions", "English", "en");
        track.mode = "showing";
      }

      // Add new cues
      captions.forEach(({ text, startTime, endTime }) => {
        track.addCue(new VTTCue(startTime, endTime, text));
      });
    }
  }, [captions]);

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
