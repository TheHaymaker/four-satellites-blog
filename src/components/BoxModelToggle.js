import React, { useState } from 'react';
import './BoxModelToggle.css';

const BoxModelToggle = () => {
  const [boxModelValue, toggleBoxModelValue] = useState(false);

  return (
    <div className="center-mdx-component">
      <div className="boxmodel-wrapper">
        <div className={`boxmodel box-${boxModelValue === false ? 'content' : 'border'}`}>
          <div className="boxmodel-inner-content-box">Content Box</div>
        </div>
      </div>
      <button
        tabIndex={0}
        className="mdx-btn"
        type="submit"
        onClick={() => toggleBoxModelValue(!boxModelValue)}
      >{`Set box-sizing to ${boxModelValue === false ? 'border-box' : 'content-box'}`}</button>
    </div>
  );
};

export default BoxModelToggle;
