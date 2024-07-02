import React from 'react';
import '../Css/CaptionTable.css';

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function CaptionTable({ captions }) {
  return (
    <div className="caption-table-container">
      <hr className="grey-line" />
      <h2>CAPTIONS</h2>
      <table className="caption-table">
        <thead>
          <tr>
            <th>Caption</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {captions.map((caption, index) => (
            <tr key={index}>
              <td>{caption.text}</td>
              <td>{formatTime(caption.startTime)}</td>
              <td>{formatTime(caption.endTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaptionTable;
