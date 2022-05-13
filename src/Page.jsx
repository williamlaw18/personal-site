import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './styles/base/base.scss';

import Loader from './components/loader'

import './styles/components/page.scss';

const Page = (content) => {

    const [fields, setFields] = useState([])
    
    const [loading, setLoading] = useState(true)
    const [loadtimeout, setLoadtimeout] = useState(false);
    if (loading == false){
        const timeout = setTimeout(() => {
        console.log('t')
        setLoadtimeout(true);
        }, 300)
    }

    useEffect(() => {
        setLoading(true)
        setFields(content.content)
        setLoading(false)
    }, [])

    return(

        <main className="pagecontainer">

            {loadtimeout == false && <Loader loading={loading}/>}

            <section className='page'>

                <div className="page__title">
                    <h1>{fields.title}</h1>
                </div>

                <Link to={'/'}>Back to Home page</Link>

                <div className='page__content'>
                    {documentToReactComponents(fields.mainContent)}
                </div>

            </section>

        </main>

    )
}

export default Page;