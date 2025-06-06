import React from 'react';
import { logoIconsList } from '../constants';

const LogoSection = () => {
  const LogoIcon = ({ icon }) => {
    return (
      <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
      </div>
    );
  };
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon icon={icon} key={icon.name + icon.id} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon icon={icon} key={icon.name + icon.imgPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
