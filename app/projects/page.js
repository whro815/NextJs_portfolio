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
    
    const projectNames = response.results.map((aProject) => (
                aProject.properties.Name.title[0].plain_text
    ));


    console.log(projectNames)

    return (
        <>
            {projectNames}
        </>
    )
    
}