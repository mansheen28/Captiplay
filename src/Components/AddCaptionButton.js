import React from 'react';
import '../Css/AddCaptionButton.css';

function AddCaptionButton(props) {
  return (
    <div className='addCaptionButton'>
      <button onClick={props.onClick} className="add-caption-button">
        Add Caption
      </button>
    </div>
  );
}

export default AddCaptionButton;
