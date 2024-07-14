import React from 'react';
import '../Css/TimeInput.css';

function TimeInput({ onStartTimeChange, onEndTimeChange, startTime, endTime }) {
  const handleStartTimeChange = (e) => {
    onStartTimeChange(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    onEndTimeChange(e.target.value);
  };

  return (
    <div className="time-input-container">
      <input
        type="text"
        placeholder="Start Time (MM:SS)"
        value={startTime}
        onChange={handleStartTimeChange}
        className="time-input"
      />
      <input
        type="text"
        placeholder="End Time (MM:SS)"
        value={endTime}
        onChange={handleEndTimeChange}
        className="time-input"
      />
    </div>
  );
}

export default TimeInput;
