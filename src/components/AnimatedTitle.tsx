
import { useState, useEffect } from 'react';

const AnimatedTitle = () => {
  const titles = [
    "Remote Access Made Better",
    "Fully Undetectable",
    "Python Based",
    "Built for IT Techs & Teachers",
    "Shell, HVNC & More",
    "Ideal for Penetration Testing",
    "Hidden Remote Command Execution"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-xl font-bold text-purple-200 animate-fade-in mt-2">
      {titles[currentIndex]}
    </p>
  );
};

export default AnimatedTitle;
