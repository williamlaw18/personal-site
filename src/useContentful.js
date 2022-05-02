
import { createClient } from "contentful"

const useContentful = () => {

    //api call
    const client = createClient({
        space: "e212u4s5fc9a",
        accessToken: "Zz3ggkGEOFFdPhu_P6kEXIrti74ACxuYchzgTQLufAs",
        host: "preview.contentful.com"
    })

    const getAllEntries = async () => {
        try{
            // get content by field
            const entries = client.getEntries()

            const sanitizedEntries = (await entries).items.map((item) => {
                const entry = item
                return{
                    item
                }
            })

            return sanitizedEntries

        } catch(error){
            console.log(`Error fetching projects: ${error}`)
        }
    };

    const getSpaceName = async () => {
        try{
            const spaceName = client.getSpace()
            return spaceName
        } catch(error){
            console.log(error)
        }
    }

    const getProjects = async () => {
        try{
            // get content by field
            const entries = client.getEntries({
                content_type: "project",
                select: "fields"
            })

            const sanitizedEntries = (await entries).items.map((item) => {
                const project = item.fields
                return{
                    ...item.fields,
                    project
                }
            })

            return sanitizedEntries

        } catch(error){
            console.log(`Error fetching projects: ${error}`)
        }
    };

    const getExperiences = async () => {
        try{
            // get content by field
            const entries = client.getEntries({
                content_type: "experience",
                select: "fields"
            })

            const sanitizedEntries = (await entries).items.map((item) => {
                const experience = item.fields
                return{
                    ...item.fields,
                    experience
                }
            })

            return sanitizedEntries

        } catch(error){
            console.log(`Error fetching experiences: ${error}`)
        }
    };

    return { getAllEntries, getSpaceName, getProjects, getExperiences }
}

export default useContentful