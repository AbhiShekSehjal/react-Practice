import React, { useState } from 'react';

function OnPointerMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        // background: '#f0f0f0'
      }}
    >
      <div
        style={{
          position: 'absolute',
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          borderRadius: '50%'
        }}
      />
    </div>
  );
}

export default OnPointerMove;
