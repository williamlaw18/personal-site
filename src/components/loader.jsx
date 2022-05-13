import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';

import '../styles/components/loader.scss';

const Loader = (loading) => {
    console.log(loading.loading)

    return(
        <div className='loader' style={{opacity: (loading.loading == true ? '1': '0')}}>
            <div className='loader__spinner'></div>
        </div>
    )
}

export default Loader;