import ProjectItem from './project-item';
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
    
   // console.log(JSON.stringify(response));

    return (
        <>
                    
            <div className="grid
                            grid-cols-1
                            md:grid-cols-2
                            py-10 
                            gap-8
                            bg-violet-100
                            sm-w-full">
                
                { response.results.map((aProject) => ( 
                    <ProjectItem key={aProject.id} data={aProject}/>
                ))}
            </div>
        </>
    )
    
}