import { useState } from 'react';

interface CircularProgressBarProps {
  imageURL: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ imageURL }) => {

  return (
    <div className="circular-progress-bar">
      <div className="progress-bar"></div>
      <img src={imageURL} style={{ display: 'none' }} />
    </div>
  );
};

export default CircularProgressBar;
