'use client';

import { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 페이지 스크롤 위치에 따라 버튼 표시 여부 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
            <>
            <button className="scrollButton" 
                    style={{ display: isVisible ? 'block' : 'none' }}
                    onClick={scrollToTop}>
                     맨 위로
                </button>                
            </>
  );
};

export default ScrollButton;