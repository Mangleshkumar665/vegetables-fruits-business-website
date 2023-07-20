import  { useState } from 'react';
import imgOne from "../images/motionImages/1.png"
const ImageMotion = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const xPos = (e.nativeEvent.clientX / window.innerWidth) * 30 - 15;
    const yPos = (e.nativeEvent.clientY / window.innerHeight) * 30 - 15;
    setPosition({ x: xPos, y: yPos });
  };

  return (
    <div className="container2" onMouseMove={handleMouseMove}>
      {/* <img src={imgOne} className="image2" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} /> */}
    </div>
  );
};

export default ImageMotion;
