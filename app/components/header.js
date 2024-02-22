"use client";

import Link from 'next/link';
import DarkModeBtn from './dark-mode-btn';
import { Providers } from './themeProvider.js'
import { layerStyle, addStyle, bodyStyle } from '../css.js';
import styles from './Menu.css';
import { useState, useEffect } from 'react';

const Header = () =>{
  
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY)
        setScrollY(window.scrollY);
      };
      console.log('='+handleScroll);
      window.addEventListener('scroll', handleScroll);

      return () => {
        console.log('='+handleScroll);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
      <>
          <header className="body-font ${scrollY > 0 ? styles.menuScrolled : styles.menu'}" style={layerStyle}>

            {/* <header className={scrollY > 0 ? styles.menuScrolled : styles.menu} > */}

            {/* <div className={styles.menuList}> */}

            <div className="container
                            mx-auto 
                            flex 
                            flex-wrap 
                            p-5 
                            flex-col 
                            md:flex-row 
                            items-center">
                <Link href="/" legacyBehavior>
                  <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          className="w-10 h-10 text-white p-2 bg-natual-100 rounded-full" 
                          viewBox="0 0 24 24">

                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        
                    </svg>
                      <span className="ml-3 text-xl" style={addStyle}>
                        조계현 포트폴리오
                      </span>
                  </a>
                </Link>
                
                <nav className="md:ml-auto 
                                flex flex-wrap
                                items-center 
                                text-base 
                                justify-center" style={addStyle}>
                  <Link href={`#Main`} legacyBehavior>
                      <a className="mr-5 hover:text-gray-900" >메인</a>
                  </Link>
                  <Link href={`#AboutMe`} legacyBehavior>
                      <a className="mr-5 hover:text-gray-900" >정보</a>
                  </Link>
                  <Link href={`#Skills`} legacyBehavior>
                      <a className="mr-5 hover:text-gray-900" >스킬</a>
                  </Link>
                  <a href="https://whro815.github.io/portfo" 
                      className="mr-5 hover:text-gray-900"
                      target="_blank" rel="noopener noreferrer" >
                      문서
                  </a>
                  <Link href="/projects" legacyBehavior>
                      <a className="mr-5 hover:text-gray-900" >프로젝트</a>
                  </Link>
                </nav>
                {/* 다크 모드 */}
                {/* <Providers>
                  <DarkModeBtn />
                </Providers> */}
            {/* </div> */}
             </div>
          </header>
      </>
    );
};
export default Header;