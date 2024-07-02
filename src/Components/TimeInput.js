import React from 'react';
import '../Css/TimeInput.css';

function TimeInput({ onStartTimeChange, onEndTimeChange, startTime, endTime }) {
  return (
    <div className="time-input-container">
      <input
        type="text"
        placeholder="Start Time (e.g., 0:10)"
        value={startTime}
        onChange={(e) => onStartTimeChange(e.target.value)}
        className="time-input"
      />
      <input
        type="text"
        placeholder="End Time (e.g., 1:30)"
        value={endTime}
        onChange={(e) => onEndTimeChange(e.target.value)}
        className="time-input"
      />
    </div>
  );
}

export default TimeInput;
