// LiveClock.tsx
import React, { useEffect, useState } from 'react';

const LiveClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(() => {
    return new Date().toLocaleTimeString();
  });

  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString()
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  return <div>{currentDate} - {currentTime}</div>;
};

export default LiveClock;
