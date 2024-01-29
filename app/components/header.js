import Link from 'next/link';
import DarkModeBtn from './dark-mode-btn';
import { Providers } from './themeProvider.js'
import { layerStyle, addStyle, bodyStyle } from '../css.js';

export default function Header(){

    return(
      <>
          <header className="body-font" style={layerStyle}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" legacyBehavior>
                  <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-natual-100 rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                      <span className="ml-3 text-xl" style={addStyle}>
                        조계현 포트폴리오
                      </span>
                  </a>
                </Link>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" style={addStyle}>
               <Link href="/" legacyBehavior>
                  <a className="mr-5 hover:text-gray-900" >메인</a>
               </Link>
               <Link href="/aboutMe" legacyBehavior>
                  <a className="mr-5 hover:text-gray-900" >정보</a>
               </Link>
               <Link href="/skills" legacyBehavior>
                  <a className="mr-5 hover:text-gray-900" >스킬</a>
               </Link>
               <Link href="/projects" legacyBehavior>
                  <a className="mr-5 hover:text-gray-900" >프로젝트</a>
               </Link>
              </nav>
                {/* 다크 모드 */}
                {/* <Providers>
                  <DarkModeBtn />
                </Providers> */}
            </div>
          </header>
      </>
    );
}