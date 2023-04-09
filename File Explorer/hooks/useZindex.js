/*-----------------------------------------------------------------------------------

    Description: Open Source Projects - File Explorer

-----------------------------------------------------------------------------------*/
import { useState, useEffect } from 'react';

const useZindex = (containerRef) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      const clickedElement = event.target;
      const containerElement = containerRef.current;
      
      if (clickedElement !== containerElement && !containerElement.contains(clickedElement)) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [containerRef]);

  const zIndex = isActive ? 7 : 0;

  return { zIndex };
};

export {useZindex};