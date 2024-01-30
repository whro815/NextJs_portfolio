// components/PreviewItem.js
import Link from 'next/link';
import Image from "next/image";

const PreviewItem = ({ itemId, itemName , itemImage}) => {
  return (
    <>
        {/* 클릭 시 해당 항목으로 이동하는 링크 */}
        <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center transition 
                                duration-300 
                                transform 
                                hover:scale-105 
                                hover:shadow-l previewItem" >
                <Link href={`#${itemId}`} legacyBehavior>
                  <Image 
                      src={itemImage}
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="none"
                      quality={100}
                      alt="이미지"/>
                </Link>
            </div>
        </div>
    </>
  );
};

export default PreviewItem;