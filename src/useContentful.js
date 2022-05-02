
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

    const getEntries = async (type) => {
        try{
            // get content by field
            const entries = client.getEntries({
                content_type: type,
                select: "fields"
            })

            const sanitizedEntries = (await entries).items.map((item) => {
                const type = item.fields
                return{
                    ...item.fields,
                    type
                }
            })

            return sanitizedEntries

        } catch(error){
            console.log(`Error fetching entries of type ${type}: ${error}`)
        }
    }

    return { getEntries, getAllEntries, getSpaceName }
}

export default useContentful