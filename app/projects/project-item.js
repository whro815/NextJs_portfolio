import Image from "next/image";
import Link from 'next/link';
import { layerStyle,
    addStyle,
    bodyStyle,
    bodyFontStyle,
    layerFontStyle,
    addBodyStyle }
from '../css.js';

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const projectUrl = data.properties.Name.title[0].href
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.properties.Image.files[0].file.url
    const workPeriod = data.properties.WorkPeriod.rich_text[0].plain_text
    const elTag = data.properties.Tag.multi_select

    const add1 = data.properties.add1.rich_text[0].plain_text
    const add2 = data.properties.add2.rich_text[0].plain_text
    const add3 = data.properties.add3.rich_text[0].plain_text
    const add4 = data.properties.add4.rich_text[0].plain_text
    const add5 = data.properties.add5.rich_text[0].plain_text
    const add6 = data.properties.add6.rich_text[0].plain_text

    const solution1 = data.properties.solution1.rich_text[0].plain_text
    const sc1_1 = data.properties.sc1_1.rich_text[0].plain_text
    const sc1_2 = data.properties.sc1_2.rich_text[0].plain_text
    const sc1_2_1 = data.properties.sc1_2_1.rich_text[0].plain_text
    const sc1_3 = data.properties.sc1_3.rich_text[0].plain_text

    const solution2 = data.properties.solution2.rich_text[0].plain_text
    const sc2_1 = data.properties.sc2_1.rich_text[0].plain_text
    const sc2_1_1 = data.properties.sc2_1_1.rich_text[0].plain_text
    const sc2_2 = data.properties.sc2_2.rich_text[0].plain_text
    // console.log(title)
    // console.log(projectUrl)
    // console.log(description)
    // console.log(imgSrc);
    // console.log(workPeriod);
    // console.log(elTag);
    // console.log(solution1);
    // console.log(solution2);

    return(
        <>
            <div className="flex
                            flex-col 
                            p-4 
                            m-3 
                            bg-neutral-50
                            rounded-md">
                <Image 
                        src={imgSrc}
                        width={500}
                        height={500}
                        layout="responsive"
                        objectFit="none"
                        quality={100}
                />
                <div className="p-4 flex flex-col">
                    <Link href={ projectUrl }>
                        <h2 className="text-2xl font-bold">{ title } </h2>  
                    </Link>
                    <h2 className="mt-4 text-xl mb-2"> 
                        { description } </h2>
                    <div className="inline-flex">
                    {/* class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" */}
                        { elTag.map((tag) => (
                            <div key={tag.id}
                                className="px-2
                                            py-1 
                                            mr-2 
                                            rounded-md 
                                            w-30 
                                            mb-2
                                            text-white" style={bodyStyle}>
                                { tag.name } 
                            </div>
                        ))}
                    </div>
                    <h2> { workPeriod } </h2>
                    

                    <h2> { add1 } </h2>
                    <h2> { add2 } </h2>
                    <h2> { add3 } </h2>
                    <h2> { add4 } </h2>
                    <h2> { add5 } </h2>
                    <h2> { add6 } </h2>
                    
                    <h2> { solution1 } </h2>
                    <h2> {"\u00A0"}{ sc1_1 } </h2>
                    <h2> {"\u00A0"}{ sc1_2 } </h2>
                    <h2> {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{ sc1_2_1 } </h2>
                    <h2> {"\u00A0"}{ sc1_3 } </h2>

                    <h2> { solution2 } </h2>
                    <h2> {"\u00A0"}{ sc2_1 } </h2>
                    <h2> {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{ sc2_1_1 } </h2>
                    <h2> {"\u00A0"}{ sc2_2 } </h2>
                </div>
            </div>
        </>
    );
     
}