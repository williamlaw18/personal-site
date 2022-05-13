import React, {useEffect, useState} from 'react';

import '../styles/components/loader.scss';

const Loader = (loading) => {

    //Loading spinner
    const [loadTimeout, setLoadTimeout] = useState(true)

    if (loading.loading == false){
        const timeout = setTimeout(() => {
            setLoadTimeout(false);
            console.log('tes');
        }, 300)
    }

    useEffect(() => {
        
    }, [])

    return(
        <React.Fragment>

            { loadTimeout &&
                <div className='loader' style={{opacity: (loading.loading == true ? '1': '0')}}>
                    <div className='loader__spinner'></div>
                </div>
            }

        </React.Fragment>
    )
}

export default Loader;