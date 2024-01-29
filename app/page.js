'use client'
import Animation from './components/animation.js'
import Link from 'next/link';
import { layerStyle,
         addStyle,
         bodyStyle,
         bodyFontStyle,
         layerFontStyle }
from './css.js';
import TypeIt from "typeit-react";

export default function Home() {

  return (
    <>
      <section className="flex
                      min-h-screen
                      flex-col
                      items-center
                      justify-center
                      body-font">

          <div className="container
                          mx-auto 
                          flex 
                          px-5 
                          py-24 
                          md:flex-row 
                          flex-col items-center">

              <div className="lg:flex-grow
                              md:w-1/2 
                              lg:pl-24 
                              md:pl-16 
                              flex flex-col 
                              md:items-start 
                              md:text-left 
                              mb-16 
                              md:mb-0 
                              items-center 
                              text-center">
                          
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                      <TypeIt options={{
                        strings: ["반갑습니다. 조계현입니다."],
                        speed: 150,
                        loop: true,
                        loopDelay: [2500],
                        waitUntilVisible: true,
                      }}/>
                    </h1>
                     
                    
                    <p className="mb-8 leading-relaxed text-black">
                      웹 개발자 과정을 통해 백엔드 개발자로 진로를 택했습니다.<br/>
                      <br/>
                      다양한 실무 경험과 다양한 기술 스택을 쌓아<br/>
                      과거보다 나아가기 위해<br/>
                      성찰하고 정진하는 백엔드 개발자가 되고자 합니다.
                    </p>

                    <p className="flex items-center mb-2">
                        <button className="flex
                                        mx-auto 
                                        text-white  
                                        border-0 
                                        py-2 
                                        px-8
                                        mr-5
                                        focus:outline-none 
                                        hover:bg-gray-600
                                        rounded 
                                        text-lg"
                                        style={layerStyle}
                                        onClick={() => {window.open('/projects','_top')}}>
                                        프로젝트
                        </button>

                        <button className="flex
                                        mx-auto 
                                        text-white  
                                        border-0 
                                        py-2 
                                        px-8 
                                        focus:outline-none 
                                        hover:bg-gray-600 
                                        rounded 
                                        text-lg"
                                        style={layerStyle}
                                        onClick={() => {window.open('https://whro815.github.io/portfo','_blank')}}>
                                        문서
                        </button>

                     </p>

              </div>

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
              </div>
        </div>
        {/* <div className='wave_body'>
          <diV className="wave"></diV>
        </div> */}
        
      </section>
    </>
  )
}
