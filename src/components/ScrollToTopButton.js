import React, { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check the scroll position
    const handleScroll = () => {
      // If the user has scrolled down more than 300 pixels, show the button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`mb-1 scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
    >
      <BsFillArrowUpCircleFill className='text-3xl relative left-[5px]' />
    </button>
  );
};

export default ScrollToTopButton;
