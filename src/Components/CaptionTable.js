import React from 'react';
import '../Css/CaptionTable.css';

function CaptionTable({ captions }) {
  return (
    
    <div className="caption-table-container">
    <hr class="grey-line" />
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
              <td>{caption.startTime}</td>
              <td>{caption.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaptionTable;
