import { layerStyle,
    addStyle,
    bodyStyle,
    bodyFontStyle,
    layerFontStyle }
from '../css.js';


export default function AboutMe(){
    return(
        <>

{/* flex min-h-screen flex-col items-center justify-center text-gray-600 body-font bg-violet-100 */}
            <section class="min-h-screen bg-violet-100 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full border-indigo-500">
                            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-neutral-50">
                                <h1 className="text-4xl pb-4 mb-4 border-b border-gray-800 leading-none font-bold">
                                    Career
                                </h1>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>
                                    (주)고클 
                                </p>
                                <p class="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2021.01.04 ~ 2023.07.21 (2년 7개월))</span> 
                                </p>
                            </div>
                        </div>

                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-neutral-50">
                                <h1 class="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 font-bold">
                                        Activities
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>
                                    에스엘 아카데미 (웹 개발, 빅데이터)
                                </p>
                                <p class="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2019.12.31 ~ 2020.12.31 (2년 7개월))</span>
                                </p>
                            </div>
                        </div>

                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-neutral-50">
                                <h1 class="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 font-bold">
                                    Certification
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>정보처리 산업기사
                                </p>
                                <p class="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2020.08 (취득))</span>
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>리눅스 마스터 2급
                                </p>
                                <p class="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2022.04 (취득))</span>
                                </p>
                            </div>
                        </div>

                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-neutral-50">
                                <h1 className="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 font-bold">
                                    <span>Skills</span>
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                        <svg fill="none" 
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round" 
                                                strokeWidth="2.5" 
                                                className="w-3 h-3" 
                                                viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    Java, Spring, SpringBoot
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>
                                    Oracle, MySql, MariaDB, Tibero
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>
                                    Html, CSS, JavaScript, JQuery
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>
                                    Git, IntelliJ, VSCode, Eclipse, Notion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}