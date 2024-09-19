// LiveClock.tsx
import React, { useEffect, useState } from 'react';

const LiveClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(() => {
    return new Date().toLocaleTimeString();
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  return <div>{currentTime}</div>;
};

export default LiveClock;
