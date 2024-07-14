import React from 'react';
import '../Css/CaptionTable.css';

function CaptionTable({ captions, onDelete }) {
  return (
    <div className="caption-table-container">
      <table className="caption-table">
        <thead>
          <tr>
            <th>Text</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {captions.map((caption, index) => (
            <tr key={index}>
              <td>{caption.text}</td>
              <td>{caption.startTime}</td>
              <td>{caption.endTime}</td>
              <td>
                <button onClick={() => onDelete(index)} className="delete-caption-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaptionTable;
