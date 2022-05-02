import React, { useEffect, useState } from 'react';

const Page = (content) => {

    const [fields, setFields] = useState([])

    useEffect(() => {
        setFields(content.content)
    }, [])

    return(

        <React.Fragment>
            
            <main className="pagecontainer">
                {fields.title}
            </main>
            
        </React.Fragment>

    )
}

export default Page;