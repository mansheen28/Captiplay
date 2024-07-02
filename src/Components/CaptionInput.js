import React from 'react';
import '../Css/CaptionInput.css';

function CaptionInput(props) {
  const handleInputChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="caption-input-container">
      <input
        type="text"
        placeholder="Enter caption"
        value={props.value}
        onChange={handleInputChange}
        className="caption-input"
      />
    </div>
  );
}

export default CaptionInput;
