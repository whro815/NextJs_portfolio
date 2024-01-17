'use client';

import { useTheme } from 'next-themes'

export default function DarkModeBtn(){

    // theme : 현재 값 getter
    // setTheme : 현재 값 바꾸기 setter
    const { theme, setTheme } = useTheme()
    
    const toggleTheme = () => {
        if (theme === "dark") {
            console.log('light');
          setTheme("light");
        } else {
            console.log('dark');
          setTheme("dark");
        }
      };

    return(
        <>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                type="button" 
                onClick={toggleTheme}
            >Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </>
    );
}