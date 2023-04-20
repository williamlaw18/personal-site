import { createClient } from "contentful"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    host: "preview.contentful.com"
})

export async function getStaticProps() {
   
    const res = await client.getEntries(({
        content_type: "project",
        select: "fields"
    }))

    return {
        props: {
            projects: res.items
        },
        revalidate: 100
    }
}

export default function Projects({projects}) {
    return (
        <div>
            {projects.map((item, index) => (
                <div key={index}>
                    <h2>{item.fields.title}</h2>
                </div>
            ))}
        </div>
    )
}

