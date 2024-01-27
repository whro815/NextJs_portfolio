'use client';

import { layerStyle,
        addStyle,
        bodyStyle,
        bodyFontStyle,
        layerFontStyle }
from '../css.js';
import styled from 'styled-components';
import './skills.scss';

const Ability = styled.div`
width: ${props => props.ability}%;
`;

export default async function Projects() {

    const mainSkills = [
        { lang: 'HTML5', ability: 80 },
        { lang: 'CSS3', ability: 80 },
        { lang: 'JavaScript', ability: 70 },
        { lang: 'jQuery', ability: 50 },
        { lang: 'React',  ability: 70 },
        { lang: 'TypeScript',  ability: 30 },
        { lang: 'Next.js',  ability: 30 },
        { lang: 'SCSS', ability: 60 },
        { lang: 'Bootstrap',  ability: 70 },
        { lang: 'Semantic UI',  ability: 70 },
        { lang: 'Figma', ability: 70 },
        { lang: 'MySQL', ability: 30 },
        { lang: 'Github', ability: 40 },
    ];

    return (
        <>
    
           <section id="skills" className="text-gray-600 body-font bg-violet-100">
               
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4">

                        {/* {
                            
                            mainSkills.map((ele) => {
                                return (
                                    <div className="xl:w-1/3 md:w-1/2 p-4">
                                        <div className="border border-gray-200 p-6 rounded-lg">
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
                                            <p className="leading-relaxed text-base">관련 내용 정리</p>
                                        </div>
                                    </div>
                                )
                            })
                            
                        } */}
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-indigo-500 p-6 rounded-lg bg-neutral-50">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Html, Css, JavaScript</h2>
                                <p className="leading-relaxed text-base text-gray-400">
                                    - 웹사이트의 구조 등을 활용<br/>
                                    - 선택자, 속성, 값의 구조 이해 & 간단한 스타일링 수행<br/>
                                    - 웹사이트의 동적 동작, JS(ES5,ES6 등) 관련 기본 문법, 라이브러리 활용<br/>
                                    - JS 관련 이벤트 핸들링 및 DOM 조작
                                </p>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-indigo-500 p-6 rounded-lg bg-neutral-50">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Java, Spring, SpringBoot</h2>
                                <p className="leading-relaxed text-base text-gray-400">
                                    - 자바 기본 문법 이해<br/>
                                    - Spring MVC 사용하여 웹 어플리케이션 개발<br/>
                                    - JDBC 사용하여 DB 연결 및 활용<br/>
                                    - MyBatis, Jpa, RestAPI 등 사용
                                </p>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-indigo-500 p-6 rounded-lg bg-neutral-50">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Oracle, MySql, MariaDB, Tibero</h2>
                                <p className="leading-relaxed text-base text-gray-400">
                                    - 공통적으로 사용되는 SQL의 기본 문법 숙지<br/>
                                    - 테이블 간의 관계 설정 및 중복 최소화하기 위해 정규화 수행                                    
                                </p>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-indigo-500 p-6 rounded-lg bg-neutral-50">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Git</h2>
                                <p className="leading-relaxed text-base text-gray-400">
                                    - 기본 명령어 숙지<br/>
                                    - 브랜치를 통한 작업을 분리 및 관리(버전 관리)<br/>
                                    - 원격 저장소 추가 및 설정
                                </p>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-indigo-500 p-6 rounded-lg bg-neutral-50">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">IntelliJ, VSCode, Eclipse</h2>
                                <p className="leading-relaxed text-base text-gray-400">
                                    - 코드 작성, 디버깅, 리팩토링 등의 작업 수행<br/>
                                    - Git, Docker 등 이해하고 활용<br/>
                                    - 통합된 협업 기능 숙지
                                </p>
                            </div>
                        </div>
                        
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-indigo-500 p-6 rounded-lg bg-neutral-50">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Notion</h2>
                                <p className="leading-relaxed text-base text-gray-400">
                                    - 텍스트 기반의 노트 및 문서 작성<br/>
                                    - 공부 내용 및 프로젝트 작업 관련 내용 작성 및 기록
                                </p>
                            </div>
                        </div>

                    </div>
                
                </div>

                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">이 정도는 알아요~</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
                </div>

            </section>
        </>
    )
    
}