import React, { useEffect, useState } from 'react';

const LiveClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(() => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  });

  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md">
      <span className="font-small text-white">{currentDate}</span>
      <span className="font-small text-white">{currentTime}</span>
    </div>
  );
};

export default LiveClock;
