import React from 'react';
import '../Css/AddCaptionButton.css';

function AddCaptionButton({ onClick }) {
  return (
    <div className='addCaptionButton'>
    <button onClick={onClick} className="add-caption-button">
      Add Caption
    </button>
    </div>
    
  );
}

export default AddCaptionButton;
