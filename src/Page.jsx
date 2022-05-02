import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';

const Page = (content) => {

    const [fields, setFields] = useState([])

    useEffect(() => {
        setFields(content.content)
    }, [])

    return(

        <React.Fragment>

            <Sidebar />
            
            <main className="pagecontainer">
                {fields.title}
            </main>
            
        </React.Fragment>

    )
}

export default Page;