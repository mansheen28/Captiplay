import React, { useState } from 'react';
import '../Css/CaptionInput.css';

function CaptionInput({ onCaptionSubmit }) {
  const [caption, setCaption] = useState('');


  return (
    <div className="caption-input-container">
      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="caption-input"
      />
    </div>
  );
}

export default CaptionInput;
