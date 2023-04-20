import { createClient } from "contentful"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    host: "preview.contentful.com"
})

export async function getStaticPaths() {
   
    const res = await client.getEntries(({
        content_type: "project",
    }))

    const paths = res.items.map(item => { 
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: "project",
        'fields.slug': params.slug
    })

    return{
        props: { project: items[0] },
        revalidate: 100
    }
}

export default function Project({project}) {

    if (!project) return <h1>Loading</h1>

    const { title } = project.fields

    return <h1>{title}</h1>
}