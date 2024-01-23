import Animation from './components/animation.js'
import Link from 'next/link';
import { layerStyle,
         addStyle,
         bodyStyle,
         bodyFontStyle,
         layerFontStyle }
from './css.js';

export default function Home() {

  return (
    <>
      <section className="flex
                      min-h-screen
                      flex-col
                      items-center
                      justify-center
                      text-gray-600
                      body-font" style={bodyStyle}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow
                          md:w-1/2 
                          lg:pr-24 
                          md:pr-16 
                          flex flex-col 
                          md:items-start 
                          md:text-left 
                          mb-16 
                          md:mb-0 
                          items-center 
                          text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" style={layerFontStyle}>
              안녕하세요.
              <br className="hidden lg:inline-block"/>
              조계현입니다.
            </h1>
            <p className="mb-8 leading-relaxed" style={layerFontStyle}>
            웹 개발자 과정을 밟으며 코딩에 흥미가 생겼고, 자연스럽게 백엔드 개발자를 꿈꾸게 되었습니다.
            수 많은 도전과 경험을 통해 다양한 기술 스택을 쌓아 과거의 자신을 관철하며 나아지기 위해 반성하고 성찰하려고 노력하는 백엔드 개발자가 되고 싶습니다.
            </p>
            <div className="flex justify-center" style={layerStyle}>
              <Link href='/projects' legacyBehavior>
                <a className="inline-flex 
                              py-2
                              px-6
                              focus:outline-none
                              hover:bg-indigo-600
                              rounded
                              text-lg" style={addStyle}>
                  프로젝트 보러가기
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
          </div>
        </div>
      </section>
    </>
  )
}
