import ProjectItem from './project-item';
import ScrollButton from './scrollButton';
import PreviewItem from './preview-item.js';
import { layerStyle,
        addStyle,
        bodyStyle,
        bodyFontStyle,
        layerFontStyle }
from '../css.js';


export default async function Projects() {

    const { Client } = require('@notionhq/client');
  
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const databaseId = process.env.NOTION_DATABASE_ID;

    const response = await notion.databases.query({
                database_id: databaseId,
                sorts: [
                    {
                        property: 'Name',
                        direction: 'ascending',
                    },
                ],
    });
      
    return (
        <>

            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        { response.results.map((aProject) => (
                            <PreviewItem itemId={aProject.id} 
                                        itemName={aProject.properties.Name.title[0].plain_text}
                                        itemImage={aProject.properties.Image.files[0].file.url} />
                        ))}
                    </div>
                </div>    
            </section>

           <section className='flex 
                                min-h-screen 
                                flex-column 
                                items-center 
                                justify-center
                                body-font' >
                <div className="container 
                                flex-column
                                mx-auto 
                                flex 
                                px-5 
                                py-32 
                                flex-col 
                                items-center">
                    
                    { response.results.map((aProject) => (
                        <ProjectItem key={aProject.id} dataId={aProject.id} data={aProject}/>
                    ))}
                        

                </div>
            </section>
            <ScrollButton/>
        </>
    )
    
}