
import { createClient } from "contentful"

const useContentful = () => {

    //api call
    const client = createClient({
        space: "d9hxalzwywnv",
        accessToken: "Am5rGRca_KMTRdK6i3cyeqCFKO4320dkHhHNEydfByc",
        host: "preview.contentful.com"
    })

    const getPersons = async () => {
        try{
            // get content by field
            const entries = client.getEntries({
                content_type: "person",
                select: "fields"
            })

            const sanitizedEntries = (await entries).items.map((item) => {
                const person = item.fields
                return{
                    ...item.fields,
                    person
                }
            })

            return sanitizedEntries

        } catch(error){
            console.log(`Error fetching authors: ${error}`)
        }
    };

    return { getPersons }
}

export default useContentful