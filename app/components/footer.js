import { layerStyle, addStyle, bodyStyle } from '../css.js';
import Link from 'next/link';

export default function Footer(){

    return(
        <>
            <footer className="body-font" style={layerStyle} >
            <div className='wave'></div>
                <div>
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center md:justify-start justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10  text-white p-2 bg-natual-100 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl" style={addStyle}>조계현 포트폴리오</span>
                        </a>
                    </Link>
                    {/* <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={addStyle}>© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="ml-1" target="_blank">@knyttneve</a>
                    </p> */}
                    </div>
                </div>
            </footer>
        </>
    );
}