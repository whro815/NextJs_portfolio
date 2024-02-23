export default function ComponentAboutMe(){

    return(
      <>
        {/* 경력, 활동, 자격증, 스킬 */}
        <section className="min-h-screen body-font overflow-hidden" id={`AboutMe`}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">AboutMe</h1>
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
                                    </span>
                                    (주)고클 
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
                                    </span>
                                    에스엘 아카데미 (웹개발, 빅데이터)
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
      </>
    )
}