import React, {useEffect} from 'react';

const useHelper = () => {

    //Section Scroll effect
    const scrollSection = (ref, posFromBottom) => {

        window.addEventListener('scroll', () => {
            const refScroll = ref.current.getBoundingClientRect().top - window.innerHeight + posFromBottom
            refScroll < 0 ? ref.current.classList.add('scrolled'): ref.current.classList.remove('scrolled')
        });
    }

    return { scrollSection }
}

export default useHelper;