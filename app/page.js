// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요.
              <br className="hidden lg:inline-block" />조계현입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
            젠그어하낰을 둑랴로 노즉낭 암다히지에 넌로호앰 랗너하까부터 이외조거연는 겡앵졈링먔사아,
             이가판은 짜이미데스에게 실끼그인레고졑단. 데페히으 둘돈븠리 떠부가시 우볼까은 호자니솝을,
              일아다. 디용을 이사상퍼 지나거 글헌아나로서 아엉어띠퇨먼을 사후시싱다 이겝니다.
               채요로 니랑으은자로 딴른 남쟈겍젼에서 강이자에 다건처럼.
                여즌시는 행반잔기뎨라딭이 안뢸줌 단훅어에 좔작고, 맵그잉둥에 나안킁히 제캐길센흐얼의 바헨셚어 벤허사맇솠군.
                 냐절스나사처럼 쳬좌헐, 어봡이짠 랼마온다어가 댜아다 설개웍놀에 론언다 옦개아빠다.
                  멍새촐무고 댄으툼이 닜뫼창개 미넨에다 응랑머아탄을까 립풏그니까 스텨다 간슬눙알게 으도의,
                   뻐오이헥뉴샜습니다 쳐싼마본으니. 미즈오뒤 륵긴믈부아살만 로허엘찐의 리라묏느의 슬아욱이 스도즈에.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          </div>
        </div>
      </section>
    </>
  )
}
