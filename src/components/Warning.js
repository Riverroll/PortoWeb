// src/components/Warning.js
import React, { useEffect, useState } from 'react';


const Warning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) { // 992px is a common breakpoint for desktop
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    showWarning && (
      <div className="warning">
        <p>This Website Is Not Yet Optimized For Mobile Experience</p>
      </div>
    )
  );
};

export default Warning;
