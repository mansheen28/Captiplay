import React, { useState } from 'react';
import '../Css/TimeInput.css';

function TimeInput() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <div className="time-input-container">
      <input
        type="text"
        placeholder="Start Time (seconds)"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="time-input"
      />
      <input
        type="text"
        placeholder="End Time (seconds)"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="time-input"
      />
    </div>
  );
}

export default TimeInput;
