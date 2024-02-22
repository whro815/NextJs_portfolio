// components/PreviewItem.js
import Link from 'next/link';
import Image from "next/image";

import { bio
  , boardJPA   
  , ciaton     
  , dicle      
  , hycu       
  , jobWork    
  , joPortFolio
  , jwt        
  , klink      
  , wiki       } from '../projects/project-image.js'

const PreviewItem = ({ itemId, itemName, itemImage, itemImageMacth}) => {




  return (
    <>
        {/* 클릭 시 해당 항목으로 이동하는 링크 */}
        <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center transition 
                                duration-300 
                                transform 
                                hover:scale-105 
                                hover:shadow-l 
                                previewItem" >
                <Link href={`#${itemId}`} legacyBehavior>
                  {
                    itemImageMacth === 'bio'
                        ? <Image src={ bio } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="bio 이미지"/>
                        : ( itemImageMacth === 'boardJPA' 
                            ? <Image src={ boardJPA } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="boardJPA 이미지"/>
                            : ( itemImageMacth === 'ciaton' 
                                ? <Image src={ ciaton } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="ciaton 이미지"/>
                                : ( itemImageMacth === 'dicle' 
                                    ? <Image src={ dicle } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="dicle 이미지"/>
                                    : ( itemImageMacth === 'hycu'
                                        ? <Image src={ hycu } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="hycu 이미지"/>
                                        : ( itemImageMacth === 'jobWork'
                                            ? <Image src={ jobWork } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="jobWork 이미지"/>
                                            : ( itemImageMacth === 'joPortFolio'
                                                ? <Image src={ joPortFolio } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="joPortFolio 이미지"/>
                                                : ( itemImageMacth === 'jwt'
                                                    ? <Image src={ jwt } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="jwt 이미지"/>
                                                    : ( itemImageMacth === 'klink'
                                                        ? <Image src={ klink } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="klink 이미지"/>
                                                        : ( itemImageMacth === 'wiki' && <Image src={ wiki } width={500} height={500} layout="responsive" objectFit="none" quality={100} alt="wiki 이미지"/> )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                          )
                    }
                </Link>
            </div>
        </div>
    </>
  );
};

export default PreviewItem;