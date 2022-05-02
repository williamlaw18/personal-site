import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './styles/base/base.scss';

// Top level Modules
import Header from './components/header'
import Footer from './components/footer'

import './styles/components/page.scss';

const Page = (content) => {

    const [fields, setFields] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setFields(content.content)
        setLoading(false)
    }, [])

    return(

        <React.Fragment>

            <Header/>

            <main className="pagecontainer">

                {loading == true && <Loader />}

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

            <Footer />
            
        </React.Fragment>

    )
}

export default Page;