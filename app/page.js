'use client'

import Animation from './components/animation.js'
import ScrollButton from './projects/scrollButton';
import { GoogleIcon } from '@mdi/react';
import Link from 'next/link';
import { layerStyle,
         addStyle,
         bodyStyle,
         bodyFontStyle,
         layerFontStyle }
from './css.js';
import TypeIt from "typeit-react";
import styled from 'styled-components';
import './../app/skills/skills.scss'

const Ability = styled.div`
width: ${props => props.ability}%;
`;

export default function Home() {

    const mainSkills = [
        { 
                lang: 'HTML5, CSS, Javascript'
            , ability: 50 
            , contents1: '- 웹사이트의 구조 등을 활용'
            , contents2: '- 선택자, 속성, 값의 구조 이해 & 간단한 스타일링 수행'
            , contents3: '- 웹사이트의 동적 동작, JS(ES5,ES6 등) 관련 기본 문법, 라이브러리 활용'
            , contents4: '- JS 관련 이벤트 핸들링 및 DOM 조작'
        },
        { 
                lang: 'Java, Spring, SpringBoot'
            , ability: 35
            , contents1: '- 자바 기본 문법 이해'
            , contents2: '- Spring MVC 사용하여 웹 어플리케이션 개발'
            , contents3: '- JDBC 사용하여 DB 연결 및 활용'
            , contents4: '- MyBatis, Jpa, RestAPI 등 사용'
        },
        { 
            lang: 'Oracle, MySql, MariaDB, Tibero'
            , ability: 40
            , contents1: '- 공통적으로 사용되는 SQL의 기본 문법 숙지'
            , contents2: '- 테이블 간의 관계 설정 및 중복 최소화하기 위해 정규화 수행'
            , contents3: ''
            , contents4: ''
        },
        { 
            lang: 'Git'
            , ability: 30
            , contents1: '- 기본 명령어 숙지'
            , contents2: '- 브랜치를 통한 작업을 분리 및 관리(버전 관리)'
            , contents3: '- 원격 저장소 추가 및 설정'
            , contents4: '' 
        },
        { 
            lang: 'IntelliJ, VSCode, Eclipse'
            ,  ability: 50
            , contents1: '- 코드 작성, 디버깅, 리팩토링 등의 작업 수행'
            , contents2: '- Git, Docker 등 이해하고 활용'
            , contents3: '- 통합된 협업 기능 숙지'
            , contents4: ''
        },
        { 
            lang: 'Notion'
            , ability: 70
            , contents1: '- 텍스트 기반의 노트 및 문서 작성'
            , contents2: '- 공부 내용 및 프로젝트 작업 관련 내용 작성 및 기록'
            , contents3: ''
            , contents4: ''},
        // { lang: 'Next.js',  ability: 30 }
        // {}
    ];

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center body-font" id={`Main`}>
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
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
                        <button className="flex mx-auto text-white border-0 py-2 px-8 mr-5 focus:outline-none hover:bg-gray-600 rounded text-lg" 
                                style={layerStyle} 
                                onClick={() => {window.open('/projects','_top')}}>
                                프로젝트
                        </button>
                     </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
              </div>
        </div>
      </section>
        {/* <div className='wave_body'>
          <diV className="wave"></diV>
        </div> */}
      {/* 경력, 활동, 자격증, 스킬 */}
      <section className="body-font overflow-hidden" id={`AboutMe`}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                            <TypeIt options={{
                                strings: ["About Me"],
                                speed: 400,
                                loop: true,
                                loopDelay: [2500],
                                waitUntilVisible: true,
                            }}/>
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg previewItem flex flex-col relative transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                <h1 className="text-4xl pb-4 mb-4 border-b border-gray-800 leading-none font-bold">경력</h1>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>(주)고클 
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2021.01.04 ~ 2023.07.21 (2년 7개월))</span> 
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg previewItem flex flex-col relative transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                <h1 className="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 font-bold">활동</h1>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>에스엘 아카데미 (웹개발, 빅데이터)
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2019.12.31 ~ 2020.12.31)</span>
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg previewItem flex flex-col relative transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                <h1 className="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 font-bold">자격증</h1>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>정보처리 산업기사
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2020.08 (취득))</span>
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>리눅스 마스터 2급
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2022.04 (취득))</span>
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg previewItem flex flex-col relative transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                <h1 className="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 font-bold">학력</h1>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>김포대학교 (컴퓨터 네트워크과)
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(2020.02 (전문 학위 취득))</span>
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                    </span>방송통신대학교 (컴퓨터 과학과)
                                </p>
                                <p className="flex items-center mb-2">
                                    <span className="text-xs text-gray-500">(재학중)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
      </section>

    <section className="min-h-screen text-gray-600 body-font" id='skills'>    
         <div className="container px-5 mx-auto" id={`Skills`}> {/* py-24 */}
            <div className="flex flex-col text-center w-full mb-20" >
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                <TypeIt options={{
                                strings: ["Skills"],
                                speed: 400,
                                loop: true,
                                loopDelay: [2500],
                                waitUntilVisible: true,
                            }}/>
                </h1>
            </div>
            <div className="flex flex-wrap -m-4">
                {
                    mainSkills.map((ele) => {
                        return (                        
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="previewItem p-6 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{ele.lang}</h2>
                                        <ul>
                                            <li key={`${ele.lang}-${ele.ability}`}>
                                                <div className="ability-bar">
                                                    <Ability ability={ele.ability}>
                                                        <div className="ability-percent">
                                                            <span className="percent">{ele.ability} %</span>
                                                        </div>
                                                    </Ability>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                        <p className="leading-relaxed text-base text-gray-400">
                                            {ele.contents1}<br/>
                                            {ele.contents2}<br/>
                                            {ele.contents3}<br/>
                                            {ele.contents4}    
                                        </p>

                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
      <ScrollButton />
      {/* <Projects/> */}
    </>
  )
}
