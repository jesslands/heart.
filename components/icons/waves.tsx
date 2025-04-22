import React from 'react';

interface WaveSVGProps {
  className?: string;
}

const WaveSVG: React.FC<WaveSVGProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
        className={className}
    >
      <path
        fill="#273036"
        fillOpacity="1"
        d="M0,32L30,53.3C60,75,120,117,180,165.3C240,213,300,267,360,272C420,277,480,235,540,213.3C600,192,660,192,720,181.3C780,171,840,149,900,128C960,107,1020,85,1080,96C1140,107,1200,149,1260,192C1320,235,1380,277,1410,298.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
  );
};

export default WaveSVG;